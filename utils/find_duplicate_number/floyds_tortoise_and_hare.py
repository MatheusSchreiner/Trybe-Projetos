def floyds_tortoise_and_hare(nums):
    tortoise = hare = nums[0]
    tortoise = nums[tortoise]
    hare = nums[nums[hare]]

    while tortoise != hare:
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]

    tortoise = nums[0]
    while tortoise != hare:
        tortoise = nums[tortoise]
        hare = nums[hare]

    return tortoise
