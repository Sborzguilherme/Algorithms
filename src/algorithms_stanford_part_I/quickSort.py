# Count the number of comparisons
comparisons = 0
def count(m):
  global comparisons
  comparisons = comparisons + m

def choosePivot(arr, method):
  if(method == 3): 
    size = len(arr)
    if(size%2 == 0):
      middle = (size//2)-1
    else:
      middle = size//2

    first = arr[0]
    last = arr[size-1]
    median = arr[middle]

    testArr = [first, median, last]
    testArr.sort()
    if(testArr[1] == first):
      return first, 0
    if(testArr[1] == last):
      return last, size-1
    return median, middle

  if(method == 2):
    position = len(arr)-1
    return arr[position], position  
  return arr[0], 0


def partition (arr):
  pivot = arr[0]
  i = 1
  for j in range(1, len(arr)):
    if(arr[j] < pivot):
      aux1 = arr[j]
      arr[j] = arr[i]
      arr[i] = aux1
      i+=1
  aux2 = arr[0]
  arr[0] = arr[i-1]
  arr[i-1] = aux2
  return arr[:i-1], arr[i:]

def quickSort(arr, method):
  if len(arr) <= 1:
    return arr
  
  pivot, position = choosePivot(arr, method)

  aux = arr[position]
  arr[position] = arr[0]
  arr[0] = aux
  
  arrL, arrR = partition(arr)
  count(len(arr)-1)
  
  sortedArrL = quickSort(arrL, method)
  sortedArrR = quickSort(arrR, method)

  return [*sortedArrL, pivot, *sortedArrR]


with open('arrayTestQS.txt') as file:
  rawArr = map(lambda x: int(x), file.readlines())

test = list(rawArr) 
result = quickSort(test, 3)
print('Comparisons {}'.format(comparisons))