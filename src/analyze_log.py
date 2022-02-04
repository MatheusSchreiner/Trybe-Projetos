import csv


def read(path):
    if not path.endswith(".csv"):
        raise FileNotFoundError("File not found")
    with open(path, mode="r") as file:
        keys = ["costumer", "order", "day"]
        return list(csv.DictReader(file, delimiter=",", fieldnames=keys))


def analyze_log(path_to_file):
    file = read(path_to_file)
    print(file)
