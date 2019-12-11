# Linear search algorithm is a simple and basic search algorithm
# in which we traverse the array while looking for the number to be searched.

def linearSearch(arr, intSearching):
    for x in range(0,len(arr)):
        if(arr[x] == intSearching):
            return x
    return -1

arr = [2,4,7,9,12,23,34,45,56]
intSearching = 23
res = linearSearch(arr, intSearching)
print(res)
