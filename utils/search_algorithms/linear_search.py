def search(list, value):
    for index, item in enumerate(list):
        if item == value:
            return index
    return -1
