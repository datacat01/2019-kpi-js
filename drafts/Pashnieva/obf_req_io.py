import requests
import json
import codecs
import os
import random

url = 'https://obfuscator.io/obfuscate'


def read_code(dir, file_name):
    """Reads js code from txt file
    
    Arguments:
        dir {str} -- file directory
        file_name {str} -- name of a file
    
    Returns:
        code {str} -- contains js code from dir/file_name
    """

    file_path = os.path.join(dir, file_name)
    file = codecs.open(file_path, 'r')
    try:
        code = file.readlines()
        sep = '\n'
        code = sep.join(code)
    except UnicodeDecodeError:
        code = -1
    file.close()

    return code


def request(code, file_name_res, path):
    """Performs a request to obfuscator, writes down obfuscated code to path/file_name
    
    Arguments:
        code {str} -- js code
        file_name_res {str} -- filename for obuscated code
        path {str} -- a path to a new file with obfuscated code
    
    """

    headers = {
        'content-type': 'application/json',
    }

    payload = {
        'code':code,
        'options': {
                'compact': True,
                'selfDefending':random.choice([True, False]),
                'disableConsoleOutput':False,
                'debugProtection':True,
                'debugProtectionInterval':False,
                'stringArray':True,
                'rotateStringArray':True,
                'rotateStringArrayEnabled':True,
                'stringArrayThreshold':random.random(),
                'stringArrayThresholdEnabled':True,
                'stringArrayEncoding':random.choice(['base64', 'rc4']),
                'stringArrayEncodingEnabled':random.choice([True, False]),
                'sourceMap':False,
                'sourceMapMode':'off',
                'sourceMapBaseUrl':'',
                'sourceMapFileName':'',
                'sourceMapSeparate':False,
                'domainLock':[],
                'reservedNames':[],
                'reservedStrings':[],
                'seed':0,
                'controlFlowFlatteningThreshold':random.random(),
                'controlFlowFlattening':random.choice([True, False]), #False
                'deadCodeInjectionThreshold':random.random(),
                'deadCodeInjection':random.choice([True, False]), #False
                'unicodeEscapeSequence':random.choice([True, False]),
                'renameGlobals':random.choice([True, False]),
                'target':'browser',
                'identifierNamesGenerator':'hexadecimal',
                'identifiersPrefix':'',
                'transformObjectKeys':random.choice([True, False])
            }
    }

    response = requests.post(
        url,
        data = json.dumps(payload),
        headers = headers
    )

    if response.status_code != 200:
        #raise IndexError(response.status_code)
        print(str(response.status_code) + '\n')
        return response.status_code

    res_json = json.loads(response.text)
    full_path = path + file_name_res
    file = codecs.open(full_path, 'w', encoding='utf-8')
    file.write(res_json['code'])
    file.close()


def main():
    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),".."))

    path1 = os.path.join(parent_dir, 'data/clear_extended/')
    path2 = os.path.join(parent_dir, 'data/obfuscated/')

    for root, dirs, files in os.walk(path1):
        for name in files:
            code = read_code(path1, name)
            #if code == -1:
                #print('name is ' + name)
            if code != -1:
                request(code, name, path2)


if __name__ == '__main__':
    main()

