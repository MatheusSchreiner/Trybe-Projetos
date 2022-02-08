from src.analyze_log import (
    high_order_costumer,
    never_goes_costumer,
    never_order_meal
)


class TrackOrders:
    def __init__(self):
        self.orders = []

    def __len__(self):
        return len(self.orders)

    def add_new_order(self, costumer, order, day):
        self.orders.append({"costumer": costumer, "order": order, "day": day})

    def get_most_ordered_dish_per_costumer(self, costumer):
        return high_order_costumer(self.orders, costumer)

    def get_never_ordered_per_costumer(self, costumer):
        return never_order_meal(self.orders, costumer)

    def get_days_never_visited_per_costumer(self, costumer):
        return never_goes_costumer(self.orders, costumer)

    def get_busiest_day(self):
        days = [i["day"] for i in self.orders]
        return max(days, key=days.count)

    def get_least_busy_day(self):
        days = [i["day"] for i in self.orders]
        return min(days, key=days.count)
