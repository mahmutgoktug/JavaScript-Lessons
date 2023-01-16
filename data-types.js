let numOne = 3
let numTwo = 3

console.log( numOne == numTwo )

let js = 'Javascript'
let py = 'Python'

console.log( js == py )

let lightOn = true
let lightOff = false

console.log( lightOn == lightOff )


let nums = [1, 'Goktug', 3]

console.log(nums)

nums[1] = 2

console.log(nums)

let nums1 = [1, 2, 3]
// let nums2 = [1, 2, 3]
let nums2 = nums1 

console.log( nums1 == nums2 ) // false

let user1 = {
    name: 'Goktug',
    surname: 'Celikkaya'
}
let user2 = {
    name: 'Goktug',
    surname: 'Celikkaya'
}

console.log( user1 == user2 ) // false

// Math.floor(Math.random() * 11) 
let randomNum = Math.random()
let numZeroToTen = randomNum * 11 // this gives min 0 and max 10.99

console.log(numZeroToTen)

let randomNumRoundToFloor = Math.floor(numZeroToTen)
console.log(randomNumRoundToFloor) // this gives between 0 and 10

let firstName = 'Goktug'
let surname = 'Celikkaya'
let a = 10
let b = 20
// let space = ' '

// let fullName = firstName + space + surname
// let fullname = firstName + ' ' + surname
// console.log(fullName)

let fullName = `${firstName}

test
deneme

${a} + ${b} = ${a + b}

${surname}`
console.log(fullName)