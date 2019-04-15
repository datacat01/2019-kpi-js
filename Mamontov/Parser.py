import requests
import lxml.html
import random
import urllib3

agents = [
'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko)',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko)'
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
]
headers = {"User-Agent":random.choice(agents)}

sites = open('sites.txt')

i = 0 #change if starts not from the begin
fail_counter = 0
#flag = False

for site in sites:
    site = site.replace('\n', '')
    #to start parsing from any site from the list in case of unexpected errors
    #if((site != 'https://www.Jcrew.com') and (flag == False)):
    #    continue
    #else:
    #    flag = True
    #->
    try:
        print(site)
        html = requests.get(site, headers=headers)
        doc = lxml.html.fromstring(html.content)
        new_releases = doc.xpath("//script[@type='text/javascript']/text()")
    except (requests.exceptions.SSLError, TimeoutError,
            urllib3.exceptions.NewConnectionError,
            requests.exceptions.ConnectionError,
            lxml.etree.ParserError,
            requests.exceptions.TooManyRedirects):
        print('Site' + site + ' is out of reach')
        fail_counter +=1
        continue

    if new_releases:
        try:
            i += 1
            script_file = open('clear_JS/' + str(i) + '.txt', 'w')
            for script in new_releases:
                script_file.write(str(script) + '\n')
        except UnicodeEncodeError:
            i -=1
            print('Site' + site + ' has UnicodeEncodeError')
            fail_counter += 1
            continue
        finally:
            script_file.close()
print(str(i) + ' files with JS code created')
print('Number of fails: ' + str(fail_counter))
sites.close()