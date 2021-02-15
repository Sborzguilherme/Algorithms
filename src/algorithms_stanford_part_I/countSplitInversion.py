def mergeAndCountSplitInv (arrL, arrR, n):
  sortedArray = []
  
  while(len(arrL) > 0 and len(arrR) > 0):
    if(arrR[0] < arrL[0]): 
      sortedArray.append(arrR.pop(0))
      if(len(arrL) > 0):
        n+=len(arrL)
    else:
      sortedArray.append(arrL.pop(0))
  
  while(len(arrL) > 0):
    sortedArray.append(arrL.pop(0))

  while(len(arrR) > 0):
    sortedArray.append(arrR.pop(0))

  return [sortedArray, n]

def countSplitInv (arr):
  if(len(arr) <= 1) :
    return [arr,0]

  half = len(arr)//2
  [left_array,x] = countSplitInv(arr[:half])
  [right_array,y] = countSplitInv(arr[half:])

  return mergeAndCountSplitInv(left_array, right_array, x+y)


#test = [6,5,4,3,2,1]

with open('splitTest.txt') as file:
  rawArr = map(lambda x: int(x), file.readlines())

[arr, result] = countSplitInv(list(rawArr))
print('Split Inversions {}'.format(result))
