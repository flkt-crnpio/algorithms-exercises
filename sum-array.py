# Simple Array Sum
# Given an array of integers, find the sum of its elements.
from array import array

def simpleArraySum(ar):
    return sum(ar)

ar = array('l', [1,2,3,4,5,6])
res = simpleArraySum(ar)
print(res)
