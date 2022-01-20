def ordenation_string(string):
    list_string = [character for character in string]
    new_list_string = []
    while list_string:
        minimun = list_string[0]
        for character in list_string:
            if character < minimun:
                minimun = character
        new_list_string.append(minimun)
        list_string.remove(minimun)

    return new_list_string


def is_anagram(first_string, second_string):
    if len(first_string) != len(second_string):
        return False

    return ordenation_string(first_string) == ordenation_string(second_string)
