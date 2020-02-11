def insertionSort(arr):
    for i in range(1, len(arr)):
        j = i - 1
        while j >= 0 and arr[j] > arr[j+1]:
            arr[j+1], arr[j] = arr[j], arr[j+1]
            j -= 1
    return arr

arr = [76,3,7,2,4,6,9,1,12,45,8,5]
resp = insertionSort(arr)
print(resp)
