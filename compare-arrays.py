# Compare the Triplets
# Given two numerical arrays a' and 'b', compare
# if a[i] > b[i] then a increments by one
# if a[i] < b[i] then b increments by one
# if a[i] = b[i] none increments
# Return an array of two integers denoting the respective comparison points in 'a' and 'b'

from array import array

def compareTriplets(a, b):
    #i know that this is not an array, but, in hackerrank need to respond with a list in order to pass
    score = [0,0] 
    for x in range(0,len(a)):
        if a[x] > b[x]:
            score[0] += 1
        if a[x] < b[x]:
            score[1] += 1
    return score

a = array('l', [4,7,1,9,2])
b = array('l', [4,8,2,1,1])
res = compareTriplets(a, b)
print(res)
