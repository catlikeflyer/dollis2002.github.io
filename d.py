import numpy as np

A = np.matrix([
    [2, 3, 0],
    [2, -1, 5],
    [1, 1, 10]
])

B = np.matrix([
    [1, 3, -1],
    [2, -2, 1],
    [2, 3, 4]
])

print(A*B)