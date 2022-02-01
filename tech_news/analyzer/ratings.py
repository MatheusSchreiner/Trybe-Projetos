from tech_news.database import find_news


# https://www.linkedin.com/pulse/python-ordenando-uma-lista-de-objetos-fabiano-roman-beraldi/?originalSubdomain=pt
def sum_popularity(new):
    return new["shares_count"] + new["comments_count"]


# Requisito 10
def top_5_news():
    all_news = find_news()
    news_ordened = sorted(all_news, key=sum_popularity, reverse=True)
    return [(item["title"], item["url"]) for item in news_ordened[:5]]


# Requisito 11
def top_5_categories():
    all_news = find_news()
    categories = [categ for new in all_news for categ in new["categories"]]
    categories.sort()
    return categories[:5]
