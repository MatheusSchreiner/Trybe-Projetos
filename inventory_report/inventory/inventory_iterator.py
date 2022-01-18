from collections.abc import Iterator


class InventoryIterator(Iterator):
    def __init__(self, data):
        self.data = data

    def __next__(self):
        index = 0
        try:
            element = self.data[index]
        except IndexError:
            raise StopIteration()

        index += 1
        return element
