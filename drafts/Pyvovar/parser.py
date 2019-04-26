import requests
import lxml
from lxml import html
from bs4 import BeautifulSoup  
import urllib
import re
import os
from urllib.error import HTTPError, URLError


class Parser:
    'Class for parsing sites'
    """
    Parse given list of websites.
    URLs of websites are expected to be saved
    in a .txt file.
    Attributes of a class:
    path_clear: path to a folder where extracted
    js files are going to be stored
    websites_to_parse: list of websites to be 
    parsed read from a websites.txt file given
    in the same directory as parser.py file.
    """

    def __init__(self, p, w):
        self.path_clear = p
        self.websites_to_parse = w


    def is_valid(self, path):
        try:
            f = open(path)
            lines = f.read()
            if(len(lines)==0):
                return False
        except (FileNotFoundError, UnicodeDecodeError):
            return False
        return True


    def parse_links(self):
        i = 0
        for website in self.websites_to_parse:
            html = 0
            try:
                html = urllib.request.urlopen(website)
            except (HTTPError, URLError, OSError, ValueError):
                #print('Exception1: ' + website)
                continue
                
            soup = BeautifulSoup(html, features='lxml')
            
            for script in soup.find_all('script'):
                filename = self.path_clear + '/' + str(i) + '.txt' 
                print(filename)
                if(os.path.exists(filename)):
                    continue

                link = script.get('src')
                if(link!=None):
                    try:
                        urllib.request.urlretrieve(link, filename)
                        if(self.is_valid(filename) == False):
                            print('here')
                            os.remove(filename)
                            i -= 1
                            continue
                    except (ValueError, HTTPError, OSError):
                        print('Exception2')
                        continue
                    i += 1
            
    

def main():
    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),".."))
    path_clear = os.path.join(parent_dir, 'data/clear/')
    #path_clear = os.path.join(parent_dir, 'data/clear_extended/')
    path_to_websites = os.path.join(parent_dir, 'Pyvovar')
    f = open(path_to_websites + '/websites.txt', 'r')
    websites_to_parse = list(f.read().split('\n'))
    parser = Parser(path_clear, websites_to_parse)
    parser.parse_links()


if __name__ == '__main__':
    main()