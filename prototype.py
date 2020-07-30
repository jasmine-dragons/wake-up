import db
import date

# User inputs -> variables
location = input('City: ')
topic = input('Search: ')
date = whatever tf the get date method/library is

# Checks database for match, if no match then web scrape
def searchArticle(location, topic, date):

    matches = {}
    # Set matches dictionary to get_article output
    if db.article_in_db(location, topic):
         matches = db.get_article(location, topic)

    # Set matches dictionary to web scrape output
    else:
        realDate = standardizeDate(date)
        # Aiden
        matches = # dictionary from web
        db.add_article(location, topic, realDate)

    # Print sorted url
    output = sortDate(matches)
    for url in output:
        print(url)


# Checks database for match, if no match then web scrape
def searchAction(location, topic, date):

    matches = {}
    # Set matches dictionary to get_action output
    if db.action_in_db(location, topic):
         matches = db.get_action(location, topic)

    # Set matches dictionary to web scrape output
    else:
        realDate = standardizeDate(date)
        # Aiden
        matches = # dictionary from web
        db.add_action(location, topic, realDate)

    # Print sorted url
    output = sortDate(matches)
    for url in output:
        print(url)
