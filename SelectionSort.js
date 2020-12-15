function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = array[i]
        let minId = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < min){
                min = array[j]
                minId = j
            }
        }
        let temp = array[i]
        array[i] = min
        array[minId] = temp
    }
}

const arr = [5,4,3,2,1]
selectionSort(arr)
console.log(arr)