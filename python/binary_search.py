# https://www.youtube.com/watch?v=zeULw-a7Mw8
data = [2, 4, 5, 7, 9, 10, 1, 15, 16, 29, 20]
target = 16

# Linear Search
def linear_search(data, target):
    for i in range(len(data)):
        if data[i] == target:
            return True
    return False

# problem here is you have to go through every single one
# worst case scenario for search time (num of operations) is data.length

# Iterative Binary Search
# To use binary search, list MUST be sorted
def binary_search_iterative(data, target):
    low = 0
    high = len(data) -1

    while low <= high:
        # 0 + data.len / 2 = middle element
        mid = (low + high) // 2
        if target == data[mid]:
            return True
        elif target < data[mid]:
        # if target is in the lower half
        # the new high value is the middle index minus 1
            high = mid - 1
        else:
            low = mid + 1
    return False

# Recursive Binary Search
def binary_search_recursive(data, target, low, high):
    # base case
    if low > high:
        return False
    else:
        mid = (low + high) // 2
        if target == data[mid]:
            return True
        elif target < data[mid]:
            return binary_search_recursive(data, target, low, mid-1)
        else:
            return binary_search_recursive(data, target, mid+1, high)

print(binary_search_iterative)