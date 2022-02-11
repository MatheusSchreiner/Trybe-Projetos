def selection_sort(list):
    for i in range(len(list)):
        min = i

        for j in range(i + 1, len(list)):
            if list[j] < list[min]:
                min = j
        list[min], list[i] = list[i], list[min]

    return list
