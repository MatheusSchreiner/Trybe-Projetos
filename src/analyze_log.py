import csv


def read(path):
    if not path.endswith(".csv"):
        raise FileNotFoundError(f"No such file or directory: '{path}'")
    with open(path, mode="r") as file:
        keys = ["costumer", "order", "day"]
        return list(csv.DictReader(file, delimiter=",", fieldnames=keys))


def high_order_costumer(file, costumer):
    costumer_meals = [val["order"] for val in file if val["costumer"] == costumer]
    return max(costumer_meals, key=costumer_meals.count)


def high_order_meal(file, costumer, meal):
    costumer_meal = [val["order"] for val in file if val["costumer"] == costumer]
    return costumer_meal.count(meal)


def never_order_meal(file, costumer):
    order = {val["order"] for val in file}
    costumer_meal = {val["order"] for val in file if val["costumer"] == costumer}
    return order.difference(costumer_meal)


def never_goes_costumer(file, costumer):
    day = {val["day"] for val in file}
    costumer_day = {val["day"] for val in file if val["costumer"] == costumer}
    return day.difference(costumer_day)


def analyze_log(path_to_file):
    file = read(path_to_file)
    maria = high_order_costumer(file, "maria")
    arnaldo = high_order_meal(file, "arnaldo", "hamburguer")
    joao = never_order_meal(file, "joao")
    joao_day = never_goes_costumer(file, "joao")

    with open("data/mkt_campaign.txt", mode="w") as f:
        f.writelines([
            f"{maria}\n"
            f"{arnaldo}\n"
            f"{joao}\n"
            f"{joao_day}\n"
        ])
