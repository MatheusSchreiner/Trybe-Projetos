def ordenation_string(string):
    lista = list(string)

    # https://stackoverflow.com/questions/11964450/python-order-a-list-of-numbers-without-built-in-sort-min-max-function
    new_list_string = []

    while lista:
        minimun = lista[0]

        for character in lista:
            if character < minimun:
                minimun = character
        new_list_string.append(minimun)
        lista.remove(minimun)

    return new_list_string


def is_anagram(first_string, second_string):
    if len(first_string) != len(second_string):
        return False

    return ordenation_string(first_string) == ordenation_string(second_string)
