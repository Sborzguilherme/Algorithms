import numpy as np

def split(matrix): 
  row, col = matrix.shape
  row2, col2 = row//2, col//2
  return matrix[:row2, :col2], matrix[:row2, col2:], matrix[row2:, :col2], matrix[row2:, col2:] 

def strassen (matrixA, matrixB):
  if(len(matrixA) <= 1) :
    return matrixA * matrixB
    
  a, b, c, d = split(matrixA) 
  e, f, g, h = split(matrixB) 
  
  p1 = strassen(a, f - h)   
  p2 = strassen(a + b, h)         
  p3 = strassen(c + d, e)         
  p4 = strassen(d, g - e)         
  p5 = strassen(a + d, e + h)         
  p6 = strassen(b - d, g + h)   
  p7 = strassen(a - c, e + f)   
  
  A = p5 + p4 - p2 + p6
  B = p1 + p2
  C = p3 + p4
  D = p1 + p5 - p3 - p7

  return np.vstack((np.hstack((A, B)), np.hstack((C, D)))) 


matrixTestA = np.array([[1,2,3,4], [2,4,6,8], [1,2,3,4], [0,1,2,3]])
matrixTestB = np.array([[1,0,2,1], [2,1,4,0], [3,3,6,1], [4,0,8,0]])

strassenAnswer = strassen(matrixTestA, matrixTestB)
numpyAnswer = np.matmul(matrixTestA, matrixTestB)

print('Strassen Algorithm:\n', strassenAnswer)
print('Numpy answer:\n', numpyAnswer)