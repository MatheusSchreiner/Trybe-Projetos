import requests
import time
from parsel import Selector

from tech_news.database import create_news


# Requisito 1
def fetch(url):
    time.sleep(1)
    try:
        req = requests.get(url, timeout=3)
    except requests.ReadTimeout:
        return None
    if req.status_code != 200:
        return None
    return req.text


# Requisito 2
def scrape_novidades(html_content):
    sel = Selector(text=html_content)
    return sel.css(
        ".tec--list__item a.tec--card__title__link::attr(href)"
        ).getall()


# Requisito 3
def scrape_next_page_link(html_content):
    sel = Selector(text=html_content)
    return sel.css(".tec--btn::attr(href)").get()


# Requisito 4
def scrape_noticia(html_content):
    sel = Selector(text=html_content)
    url = sel.css("head link[rel=canonical]::attr(href)").get()
    title = sel.css(".tec--article__header__title::text").get()
    timestamp = sel.css("time::attr(datetime)").get()
    writer = sel.css(".tec--author__info__link::text").get()
    shares = sel.css(".tec--toolbar__item::text").get()
    comments = sel.css("#js-comments-btn::attr(data-count)").get()
    summary = sel.css(".tec--article__body > p:nth-child(1) *::text").getall()
    sources = sel.css(".z--mb-16 .tec--badge::text").getall()
    categories = sel.css("#js-categories a::text").getall()

    return {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": writer.strip() if writer else None,
        "shares_count": int(shares.split()[0]) if shares else 0,
        "comments_count": int(comments),
        "summary": "".join(summary),
        "sources": [item.strip() for item in sources],
        "categories": [item.strip() for item in categories],
    }


# Requisito 5
def get_tech_news(amount):
    url_site = "https://www.tecmundo.com.br/novidades"
    html_content = fetch(url_site)
    url_news = scrape_novidades(html_content)

    while len(url_news) < amount:
        url_next_page = scrape_next_page_link(html_content)
        url_news.extend(scrape_novidades(fetch(url_next_page)))

    all_news = [scrape_noticia(fetch(url)) for url in url_news[:amount]]

    create_news(all_news)
    return all_news
