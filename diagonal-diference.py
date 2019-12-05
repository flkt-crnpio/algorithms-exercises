# Diagonal Difference
# Given a square matrix, calculate the absolute difference between the sums of its diagonals.

def diagonalDifference(arr):
    d1 = int(0)
    d2 = int(0)
    for i in range(0,len(arr)):
        for j in range(0,len(arr)):
            if i == j:
                d1 += arr[i][j]
            if i == len(arr) - j - 1:
                d2 += arr[i][j]
    diff = d1 - d2
    return abs(diff)

arr = [[11,2,4],[4,5,6],[10,8,-12]]
res = diagonalDifference(arr)
print(res)
