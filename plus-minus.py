# Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
# Print the decimal value of each fraction on a new line.

def plusMinus(arr):
    zero = 0
    pos = 0
    neg = 0
    for n in arr:
        if n == 0:
            zero += 1
        elif n < 0:
            neg += 1
        elif n > 0:
            pos += 1
    print( format(pos/len(arr), '.6f' ) )
    print( format(neg/len(arr), '.6f' ) )
    print( format(zero/len(arr), '.6f' ) )

arr = [2,5,-1,0,-3,-2];
plusMinus(arr);
