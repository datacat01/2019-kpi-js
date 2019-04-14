import re
import os

import pandas as pd
import numpy as np

# add to requirements
from comment_parser import comment_parser
from comment_parser.parsers.common import UnterminatedCommentError


def get_features(path_to_script):


    try:
        # processing comments
        comments_list = comment_parser.extract_comments(
            path_to_script, mime='text/x-javascript')
        comment_chars = 0
        for comment in comments_list:
            comment_chars += len(comment.text())
        comment_amount = len(comments_list)

    except UnterminatedCommentError:
        comments_list = [""]
        comment_amount = 1
    return comments_list


parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
paath = parent_dir + "/data/clear/264.txt"

lll = os.listdir(parent_dir + "/data/clear/")

print(sorted(lll))
