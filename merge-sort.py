def mergeSort(arr):
    if len(arr) > 1:
        half = len(arr)//2
        left = arr[:half]
        right = arr[half:]
        print(left)
        print(right)
        mergeSort(left)
        mergeSort(right)



if __name__ == '__main__':
    arr = [12,5,3,7,9,4,24,8,6,3,13,2]
    print(arr)
    mergeSort(arr)
