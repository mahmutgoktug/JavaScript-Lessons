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

/* console.log(
    numbers.find(number => number > 3)
)

console.log(numbers.reduce((oldValue, currentValue) => oldValue + currentValue, 0)
) */

// let total = 0
// let calculate = (number, index) => total += (number + index)
// numbers.forEach(calculate)
// console.log(total);

let users = [
    {
        id: 2,
        name: 'Goktug',
        age: 21,
        gender: 1
    },
    {
        id: 1,
        name: 'Halil',
        age: 50,
        gender: 1
    },
    {
        id: 4,
        name: 'Zerafet',
        age: 29,
        gender: 2
    },
    {
        id: 3,
        name: 'Tugba',
        age: 50,
        gender: 2
    }
]

users.sort((a, b) => a.name.localeCompare(b.name))
console.log(users)

const currentUser = users.find(user => user.id === 3)
// const currentUser = users.findIndex(user => user.id === 3)
// console.log(currentUser)


// console.log(
//     users.every(user => user.gender === 1)
// )

// console.log(
//     users.some(user => user.gender === 1)
// )

users = users.map(user => {
    if ( user.id === 2 ){
        user.name = 'Ejder'
    }
    return user
}) 

const women = users.filter(user => user.gender === 2)
const men = users.filter(user => user.gender === 1 && user.age > 30)

// console.log(women)

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

const names = ['Goktug', 'Ejder', 'Halil']
const numaralar = [3, 6, 2, 1, 10, 1.2, 20, 9]
// numaralar.sort((a, b) => a - b)
names.sort((a, b) => a.localeCompare(b))

// console.log(names)