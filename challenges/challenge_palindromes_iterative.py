def is_palindrome_iterative(word):
    if not len(word):
        return False
    return word == word[::-1]
