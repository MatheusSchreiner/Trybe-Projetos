def is_palindrome_recursive(word, low_index, high_index):
    if low_index >= high_index:
        return True
    
    if not len(word):
        return False
    
    return (
        word[low_index] == word[high_index] and
        is_palindrome_recursive(word, low_index + 1, high_index - 1)
    )
