import re
import datetime
from tech_news.database import search_news


# Requisito 6
def search_by_title(title):
    # https://stackoverflow.com/questions/3483318/performing-regex-queries-with-pymongo
    all_news = search_news({"title": re.compile(title, re.IGNORECASE)})
    return [(item["title"], item["url"]) for item in all_news]


# Requisito 7
def search_by_date(date):
    try:
        datetime.date.fromisoformat(date)
        all_news = search_news({"timestamp": re.compile(date)})
        return [(item["title"], item["url"]) for item in all_news]
    except ValueError:
        raise ValueError("Data inválida")


# Requisito 8
def search_by_source(source):
    all_news = search_news({"sources": re.compile(source, re.IGNORECASE)})
    return [(item["title"], item["url"]) for item in all_news]


# Requisito 9
def search_by_category(category):
    all_news = search_news({"categories": re.compile(category, re.IGNORECASE)})
    return [(item["title"], item["url"]) for item in all_news]


# Outro código para exemplo
    """
    # from tech_news.database import db
from tech_news.database import find_news
import datetime


# Requisito 6
# https://www.thecodebuzz.com/mongodb-query-case-sensitive-case-insensitive/
# MongoDb regex query with case insensitive search
def search_by_title(title):
    list = []
    for n in find_news({"title": {"$regex": title, "$options": "i"}}):
        list.append(n["title"], n["url"])
    return list


# Leticia Galvão
def valid_date(datestring):
    try:
        datetime.datetime.strptime(datestring, '%Y-%m-%d')
        return True
    except ValueError:
        return False


# Requisito 7
def search_by_date(date):
    if valid_date(date):
        news = []
        for n in find_news({
            "timestamp": {"$regex": date, "$options": "i"}
        }):
            news.append(n["title"], n["url"])
        return news
    else:
        raise ValueError("Data inválida")


# Requisito 8
def search_by_source(source):
    news = []
    for n in find_news({
        "sources": {"$elemMatch": {"$regex": source, "$options": "i"}}
    }):
        news.append(n["title"], n["url"])
    return news


# Requisito 9
def search_by_category(category):
    news = []
    for n in find_news({
        "categories": {
            "$elemMatch": {"$regex": category, "$options": "i"}
            }}):
        news.append(n["title"], n["url"])
    return news
    """
