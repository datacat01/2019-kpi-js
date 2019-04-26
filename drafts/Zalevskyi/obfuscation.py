import requests
import json
import codecs
import random
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

    return "alert(1)"


def request(code):

    headers = {
        'content-type': 'application/json',
    }
    payload = {
        'code':'{}'.format(code),
        'options': {
                'compact': True,
                'selfDefending':bool(random.getrandbits(1)),
                'disableConsoleOutput':False,
                'debugProtection':True,
                'debugProtectionInterval':False,
                'stringArray':True,
                'rotateStringArray':True,
                'rotateStringArrayEnabled':True,
                'stringArrayThreshold':random.uniform(0, 1),
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
                'seed':random.randint(0,42),
                'controlFlowFlatteningThreshold':random.uniform(0, 1),
                'controlFlowFlattening':False,
                'deadCodeInjectionThreshold':random.uniform(0, 1)/2,
                'deadCodeInjection':bool(random.getrandbits(1)),
                'unicodeEscapeSequence':bool(random.getrandbits(1)),
                'renameGlobals':bool(random.getrandbits(1)),
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
    return res_json

def main():
    code = "alert(1)"
    obfuscated_code = request(code)
    print("********************"*2)
    print(obfuscated_code["code"])


if __name__ == '__main__':
    main()

