def binary_search(list, low, high, value):
    if high < low:
        raise ValueError(f"{value} is not in list")

    mid = (high + low) // 2

    if list[mid] == value:
        return mid
    elif list[mid] > value:
        return binary_search(list, low, mid - 1, value)
    else:
        return binary_search(list, mid + 1, high, value)
