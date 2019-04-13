import requests
import json
import codecs
import os

url = 'https://obfuscator.io/obfuscate'


def read_code(dir, file_name):

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

    headers = {
        'content-type': 'application/json',
    }

    payload = {
        'code':'var a ={}',
        'options': {
                'compact': True,
                'selfDefending':False,
                'disableConsoleOutput':False,
                'debugProtection':True,
                'debugProtectionInterval':False,
                'stringArray':True,
                'rotateStringArray':True,
                'rotateStringArrayEnabled':True,
                'stringArrayThreshold':0.8,
                'stringArrayThresholdEnabled':True,
                'stringArrayEncoding':'base64',
                'stringArrayEncodingEnabled':True,
                'sourceMap':False,
                'sourceMapMode':'off',
                'sourceMapBaseUrl':'',
                'sourceMapFileName':'',
                'sourceMapSeparate':False,
                'domainLock':[],
                'reservedNames':[],
                'reservedStrings':[],
                'seed':0,
                'controlFlowFlatteningThreshold':0.75,
                'controlFlowFlattening':False,
                'deadCodeInjectionThreshold':0.4,
                'deadCodeInjection':False,
                'unicodeEscapeSequence':False,
                'renameGlobals':False,
                'target':'browser',
                'identifierNamesGenerator':'hexadecimal',
                'identifiersPrefix':'',
                'transformObjectKeys':False
            }
    }

    response = requests.post(
        url,
        data = json.dumps(payload),
        headers = headers
    )

    if response.status_code != 200:
        raise IndexError(response.status_code)

    res_json = json.loads(response.text)
    full_path = path + file_name_res
    file = codecs.open(full_path, 'w', encoding='utf-8')
    file.write(res_json['code'])
    file.close()


def main():
    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),".."))

    path1 = os.path.join(parent_dir, 'data/clear/')
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

