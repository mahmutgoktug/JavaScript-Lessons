const fonksiyon = number => number ** 2

function cube(cb, number){
    return cb(number) * number
}

// console.log( cube(fonksiyon, 3) );

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}

// console.log( a(5)(10)(20) );

const numbers = [1, 3, 5, 7, 9]
let total = 0
let calculate = number => total += number
numbers.forEach(calculate)
// console.log(total);

function sayHello() {
    console.log('Hello!');
}
const interval = setInterval(sayHello,1000)
    //clearInterval
//setTimeout(sayHello,2000)
    //clearTimeout

const timeout = setTimeout(() => {
    clearInterval(interval)
    console.log('interval işlemi iptal edildi!')
 }, 5000)

setTimeout(() => {
      clearTimeout(timeout)
      console.log('timeout işlemi iptal edildi, interval devam edecek...')  
}, 3000);