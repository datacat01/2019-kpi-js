import requests
import json
import codecs
import os

url = 'https://obfuscator.io/obfuscate'


def read_code(dir, file_name):

    file_path = os.path.join(dir, file_name)
    #print(file_path)
    file = open(file_path, 'r')
    code = file.readlines()
    sep = '\n'
    code = sep.join(code)
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
                'stringArrayEncoding':False,
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
    base_dir = os.path.dirname(os.path.abspath(__file__))
    path1 = base_dir[:-9] + 'data/clear/'
    path2 = base_dir[:-9] + 'data/obfuscated/'

    for root, dirs, files in os.walk(path1):
        for name in files:
            #print('name is ' + name)
            code = read_code(path1, name)
            request(code, name, path2)


if __name__ == '__main__':
    main()

