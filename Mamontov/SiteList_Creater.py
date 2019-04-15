import requests
import lxml.html

sites = open('sites.txt', 'w')

category_list = ["Antiques_and_Collectibles",
"Auctions",
"Children",
"Classifieds",
"Clothing",
"Consumer_Electronics",
"Crafts",
"Death_Care",
"Entertainment",
"Ethnic_and_Regional",
"Flowers",
"Food",
"General_Merchandise",
"Gifts",
"Health",
"Holidays",
"Home_and_Garden",
"Jewelry",
"Music",
"Niche",
"Office_Products",
"Pets",
"Photography",
"Publications",
"Recreation",
"Sports",
"Tobacco",
"Tools",
"Toys_and_Games ",
"Travel",
"Vehicles",
"Visual Arts",
"Weddings"]

sites_counter = 0

for category in category_list:
    html = requests.get('https://www.alexa.com/topsites/category/Top/Shopping/' + category)
    doc = lxml.html.fromstring(html.content)

    new_releases = doc.xpath("//html/body/section/div/div/section/span/span/div/div/div/div/div/p/a[1]/text()")

    for addresses in new_releases:
        sites.write('https://www.' + addresses + '\n')
        sites_counter += 1

print(str(sites_counter) + " sites found")
sites.close()