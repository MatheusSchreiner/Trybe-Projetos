def insertion_sort(list):
    for index in range(len(list)):
        curr_value = list[index]
        position = index
        while (position > 0 and list[position - 1] > curr_value):
            list[position] = list[position - 1]
            position = position - 1
        list[position] = curr_value
    return list
