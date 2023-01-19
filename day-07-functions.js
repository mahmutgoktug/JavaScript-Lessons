function multiply(num1, num2) {
    return num1 * num2
}

function sumArrayValues(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

let dizi = [2, 4, 6, 8, 10, 20]

console.log('Toplam', sumArrayValues(dizi))

function topla() {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log('Toplam', topla(2, 5, 7, 9, 10))