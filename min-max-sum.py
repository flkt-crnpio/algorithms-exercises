# Mini-Max Sum
# Given five positive integers, find the minimum and maximum values that can be calculated
# by summing exactly four of the five integers.
# Then print the respective minimum and maximum values as a single line of two space-separated long integers.

def miniMaxSum(arr):
    arr.sort()
    minArr = arr[0:len(arr)-1]
    min = sum(minArr)
    maxArr = arr[1:]
    max = sum(maxArr)
    print(min, max)

arr = [1, 2 ,3 ,4 ,5]
miniMaxSum(arr)
