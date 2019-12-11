#

def binarySearch(arr, search, left, right):
    if left <= right:
        mid = int((left + right) / 2)
        if arr[mid] == search:
            print('found')
            print(mid)
            print(arr[mid])
            print(search)
            return mid
        elif arr[mid] < search:
            print('half up')
            print(mid)
            print(right)
            return binarySearch(arr, search, mid + 1, right )
        else:
            print('half down')
            print(left)
            print(mid)
            return binarySearch(arr, search, left, mid - 1, )
    return -1


arr = [2,4,7,9,12,23,34,45,56]
search = 23
left = 0
right = len(arr)
res = binarySearch(arr, search, left, right)
print(res)
