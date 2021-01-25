def merge (arrL, arrR):
  sortedArray = []

  while(len(arrL) > 0 and len(arrR) > 0):
    if(arrL[0] > arrR[0]): 
      sortedArray.append(arrR.pop(0))
    else:
      sortedArray.append(arrL.pop(0))
  
  while(len(arrL) > 0):
    sortedArray.append(arrL.pop(0))

  while(len(arrR) > 0):
    sortedArray.append(arrR.pop(0))

  return sortedArray

def mergeSort (arr):
  if(len(arr) <= 1) :
    return arr

  half = len(arr)//2
  left_array = mergeSort(arr[:half])
  right_array = mergeSort(arr[half:])

  return merge(left_array, right_array)


test = [5,4,1,8,7,2,6,3]
result = mergeSort(test)
print('Sorted Array {}'.format(result))