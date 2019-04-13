import requests
import json
import codecs
import os

file_name = 'test_code.txt'
url = 'https://obfuscator.io/obfuscate'

base_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(base_dir, file_name)
file = open(file_path, 'r')
code = file.readlines()
sep = '\n'
code = sep.join(code)
file.close()


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
    headers = headers,
)

if response.status_code != 200:
    print(response.status_code)

res_json = json.loads(response.text)
#print(res_json)
file = codecs.open('obfuscated_code_io.txt', 'w', encoding='utf-8')
file.write(res_json['code'])
file.close()

