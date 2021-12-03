from functools import lru_cache
import csv


@lru_cache
def read(path):
    '''
    Desta forma eu não fecho o arquivo, logo não é aconselhavel

    file = open(path)
    response = csv.DictReader(file)
    return list(response)
    '''

    with open(path) as file:
        return list(csv.DictReader(file))
