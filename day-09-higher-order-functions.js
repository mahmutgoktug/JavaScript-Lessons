const fonksiyon = number => number ** 2

function cube(cb, number){
    return cb(number) * number
}

console.log( cube(fonksiyon, 3) );