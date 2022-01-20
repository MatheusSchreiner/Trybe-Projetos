def find_duplicate(nums):
    if len(nums) <= 1:
        return False

    for num in nums:
        if type(num) is not int or num < 1:
            return False
        
        
