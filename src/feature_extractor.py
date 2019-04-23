import re
import sys
import os
import math

import pandas as pd
import numpy as np

# pip install comment_parser
from comment_parser import comment_parser
from comment_parser.parsers.common import UnterminatedCommentError

column_names = ["script_len", "char_per_line", "if_freq",
                "false_freq", "true_freq", "whitesp_freq", "lines_100", "return_freq",
                "var_freq", "this_freq", "toString_freq", "eval_freq", "comment_amount",
                "words_count", "vowel_freq", "non_read_freq", "scr_entropy", "str_enc_freq"
                ]

parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


def entropy(string):
    """Calculates Shennon entropy

    Arguments:
        string {[string]} -- [String to be evaluated]

    Returns:
        [int] -- [Shennon entropy of string]
    """

    # get probability of chars in string
    prob = [float(string.count(c)) / len(string)
            for c in dict.fromkeys(list(string))]

    # calculate the entropy
    entropy = - sum([p * math.log(p) / math.log(2.0) for p in prob])

    return entropy


def get_features(path_to_script):
    """Computes featrues for given script

    Arguments:
        path_to_script {str} -- [path to script]

    Returns:
        numpy.ndarray<int> -- [Array containing features for given script]
    """

    # opening scipt
    with open(path_to_script, 'r', encoding="utf-8", errors='ignore') as myfile:
        script = myfile.read()

    # basic statistics
    script_len = len(script)

    if script_len == 0:
        raise Exception("EmptyFileError")
    
    num_lines = script.count('\n') + 1
    char_per_line = script_len/num_lines

    # processing comments
    try:
        comments_list = comment_parser.extract_comments(
            path_to_script, mime='text/x-javascript')
        comment_chars = 0
        for comment in comments_list:
            comment_chars += len(comment.text())
        comment_amount = len(comments_list)

    except UnterminatedCommentError:
        comments_list = [""]
        comment_amount = 1
        print("UnterminatedCommentError occured in {} file".format(path_to_script))

    # keywords frequencis
    whitesp_num = script.count(" ")
    whitesp_freq = whitesp_num/script_len

    words_list = re.findall(r'\w+', script)
    words_count = len(words_list)

    if_freq = script.count("if")/words_count  # may be improved (if () if )
    false_freq = script.count("false")/words_count
    true_freq = script.count("true")/words_count
    return_freq = script.count("return")/words_count
    var_freq = script.count("var ")/words_count
    this_freq = script.count("this ")/words_count
    toString_freq = script.count("toString")/words_count
    eval_freq = script.count("eval")/words_count

    #lines > 1000
    line_script = script.split('\n')
    counter = 0
    for line in line_script:
        if len(line) > 1000:
            counter += 1
    lines_100 = counter / num_lines

    # character-specific characteristics
    vowel_freq = len(re.findall('[aeiou]', script, re.IGNORECASE))/script_len
    non_read_freq = len(re.findall('[^a-zA-Z]', script))/script_len
    scr_entropy = entropy(script)
    str_enc_freq = (script.count("0x") + script.count(r"\x"))/script_len

    feature_vector = [script_len, char_per_line, if_freq,
                      false_freq, true_freq, whitesp_freq, lines_100, return_freq,
                      var_freq, this_freq, toString_freq, eval_freq, comment_amount,
                      words_count, vowel_freq, non_read_freq, scr_entropy, str_enc_freq
                      ]
    return np.array(feature_vector)


def save_feature_dataset(path_to_folder, df_name, ends_with):
    counter = 0
    try:
        feature_list = []

        for filename in os.listdir(path_to_folder):
            if filename.endswith(ends_with):

                try:
                    features = get_features(path_to_folder + filename)
                except Exception as ex:
                    print(ex.args)

                feature_list.append(features)
                #print("processed {}th file: {}".format(counter +1,filename))
                counter += 1

        df = pd.DataFrame(np.array(feature_list), columns=column_names)
        df.to_csv(parent_dir + "/data/features/{}.csv".format(df_name))
        print("Successfully processed {} files. Saved to {}".format(counter, df_name))
    except:
        print("Error occured while processing file {}".format(filename))
        print(sys.exc_info())


if __name__ == '__main__':

    save_feature_dataset(parent_dir + "/data/clear_extended/", "features_clear", ".js")
    save_feature_dataset(parent_dir + "/data/obfuscated/",
                         "features_obfuscated", ".txt")
