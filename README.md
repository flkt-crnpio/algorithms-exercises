# algorithms

### Linear search
Linear search algorithm is a simple and basic search algorithm in which we traverse the array while looking for the number to be searched. Linear: O(n)

* [linear-search.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/linear-search.py)
* [linear-search.js](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/linear-search.js)

### Binary search
Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

* [binary-search.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/binary-search.py)
* [binary-search.js](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/binary-search.js)

### Jump Search
Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements. The time complexity of Jump Search is between Linear Search ( ( O(n) ) and Binary Search ( O (Log n) ).


Binary Search is better than Jump Search, but Jump search has an advantage that we traverse back only once (Binary Search may require up to O(Log n) jumps, consider a situation where the element to be searched is the smallest element or smaller than the smallest). So in a system where binary search is costly, we use Jump Search.

* [jump-search.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/jump-search.py)
* [jump-search.js](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/jump-search.js)

### Sorted Merge

### Selection Sort
The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array. It has O(n^2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort.

* [selection-sort.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/selection-sort.py)
* [selection-sort.js](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/selection-sort.js)

### Bubble Sort
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order. Runtime ( O(n^2) )

* [bubble-sort.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/bubble-sort.py)
* [bubble-sort.js](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/bubble-sort.js)
* [recursive-bubble-sort.js](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/recursive-bubble-sort.js)
* [recursive-bubble-sort.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/recursive-bubble-sort.py)

## HackerRank problem solving
* [big-sum.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/big-sum.py)
* [compare-arrays.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/compare-arrays.py)
* [diagonal-diference.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/diagonal-diference.py)
* [first.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/first.py)
* [min-mas-sum.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/min-mas-sum.py)
* [staircase.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/staircase.py)
* [string-subsecuence.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/string-subsecuence.py)
* [sum-array.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/sum-array.py)
* [plus-minus.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/plus-minus.py)
* [plus-minus.js](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/plus-minus.js)

## From friends
* [balanced.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/balanced.py)
* [balanced.js](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/balanced.js)
* [swap.py](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/swap.py)
* [swap.js](https://github.com/flkt-crnpio/algorithms-exercises/blob/master/swap.js)
