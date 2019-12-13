# Given an array of parentheses check if opening and closing elements are same quantity
open = ['[','{','(']
closed = [']','}',')']

def balanced(arr):
    balance = 0
    for a in arr:
        if a in open:
            balance += 1
        if a in closed:
            balance -= 1

    if balance == 0:
        return True

    return False

arr = ['[',']','[','[',']','}',')']
resp = balanced(arr)
print(resp)
