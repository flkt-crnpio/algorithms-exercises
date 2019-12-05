# HackerRank in a String!
# Given an array of strings 's' print 'YES' if the string contains the letters to write 'hackerrank', otherwise, print 'NO'
# AND need to be in the same order

def hackerrankInString(s):
    a = ['h','a','c','k','e','r','r','a','n','k']

    for x in range(0,len(s)):
        if((len(a) > 0) and (a[0] == s[x])):
            a.pop(0)

    if(len(a) == 0):
        return 'YES'
    else:
        return 'NO'


    # if(all(x in s for x in a)):
    #     return 'YES'
    # else:
    #     return 'NO'

    # a = set('hackerrank')
    # for x in range(0,len(s)):
    #     b = set(s[x])
    #     if(a.issubset(b)):
    #         print('YES')
    #     else:
    #         print('NO')

s = ['hereiamstackerrank','hackerworld','hhaacckkekraraannk','rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt']
res = hackerrankInString(s[0])
print(res)
