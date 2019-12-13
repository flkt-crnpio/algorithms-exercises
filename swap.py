# con un arreglo que deberia estar ordenado en orden ascendente
# si cada numero puede moverse solo dos espacios hacia abajo
# determinar si se puede llegar a el arreglo dato
# regresar cuandos movimientos se hicieron para llegar a las posiciones del arreglo

def swapArr(arr):
    swaps = 0
    for x in arr:
        if x > arr.index(x)+1:
            if (x - (arr.index(x)+1)) > 2:
                return 'no se puede'
            else:
                swaps += x - (arr.index(x)+1)
    return swaps

# arr = [1,2,3,4,5,8,6,7]
# arr = [2,1,5,3,4]
arr = [2,5,1,3,4]
# arr = [5,4,3,2,1]

print(swapArr(arr))
