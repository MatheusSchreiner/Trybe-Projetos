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
