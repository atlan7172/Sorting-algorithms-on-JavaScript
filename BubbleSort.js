function bubbleSort(array) {
    let temp
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                sorted = false
            }
        }
    }
}

const arr = [5,3,4,2,1]
bubbleSort(arr)
console.log(arr)