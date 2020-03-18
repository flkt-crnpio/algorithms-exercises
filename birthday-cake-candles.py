def bigCandles(ar):
	taller = max(ar)
	counter = 0
	for x in ar:
		if x == taller:
			counter += 1
	return counter

arr = [4,4,3,2,6,4,5]
res = bigCandles(arr)
print(res)