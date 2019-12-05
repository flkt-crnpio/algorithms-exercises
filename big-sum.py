# A Very Big Sum
# Calculate and print the sum of the elements in an array,
# keeping in mind that some of those integers may be quite large.

from array import array

def aVeryBigSum(ar):
    return sum(ar)

ar = array('q',[10000000002,10000000002])
res = aVeryBigSum(ar)
print(res)
