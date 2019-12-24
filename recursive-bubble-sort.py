def recursiveBubbleSort(arr, n):
    for x in range(0, n-1):
        if arr[x] > arr[x+1]:
            arr[x], arr[x+1] = arr[x+1], arr[x]
            recursiveBubbleSort(arr, n-1)
    return arr;

arr = [2,5,8,1,4,9,3]
n = len(arr)
print(recursiveBubbleSort(arr,n))
