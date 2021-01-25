def karatsuba (x, y):
  size = max(len(str(x)), len(str(y)))
  if(size <= 3) :
    return x*y
    
  m = size//2
  shift = 10**m
  
  p = x//shift
  q = x % shift
  r = y//shift
  s = y % shift

  pr = karatsuba(p,r)
  qs = karatsuba(q,s)
  y = karatsuba(p+q, r+s)

  return pr*(10**(2*m)) + ((y-pr-qs)*(10**m)) + qs


test = [1234, 5678]
answer = karatsuba(test[0], test[1])

print('{0} x {1} = {2}'.format(test[0], test[1], answer))