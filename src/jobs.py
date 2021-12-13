from functools import lru_cache
import csv


@lru_cache
def read(path):
    '''
    file = open(path)
    var = csv.reader(file)
    return list(var)
    '''
    with open(path) as file:
        return list(csv.DictReader(file))
