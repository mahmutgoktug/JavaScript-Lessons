// Destructuring => şeklini bozma
// Spread => Dağılma, yayma
// Rest => Kalanın tamamı

/*
const numbers = [10, 12, 14]

const [number1, number2] = numbers

 
console.log(numbers[0]) // 10
console.log(number1) // 10

console.log(numbers[1]) // 12
console.log(number2) // 12

console.log(numbers[2]) 

const stack = [
    ['HTML', 'CSS', ['JAVASCRIPT', 'REACT', 'SVELTE']],
    ['PHP', 'MYSQL', 'NODEJS']
]

// const [frontend, backend] = stack
const [[firstLanguage, secondLanguage, [firstThirdLanguage]], backend] = stack

console.log(firstThirdLanguage);
*/

const names = ['goktug', 'halil', 'faruk', 'sahure', 'tugba', 'mahmut'] 

const [myName, myFatherName, myFriendName, ...otherNames] = names

console.log(myName);
console.log(myFatherName);
console.log(myFriendName);
console.log(otherNames);


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
    ['Turkey', 'Ankara']
]

for (const [country, capital] of countries){
    console.log(`Ülke: ${country} - Başkent: ${capital}`);
}



const user = {
    name: 'Goktug',
    surname: 'Celikkaya',
    age: 21,
    pet: {
        cat: ['Witcher']
    }
}
const {surname: soyad} = user

console.log(soyad);



function multiply([number1, number2]){
    return number1 * number2
}

const numbers = [10, 10]

console.log(
    multiply(numbers)
);

const numberss = [1, 3, 5]
const numberss2 = [...numberss]

console.log(numberss);

numberss2.push(10)

console.log(numberss);
console.log(numberss2);

const userr = {
    name: 'Goktug',
    surname: 'Celikkaya'
}

const userr2 = {...userr}
userr2.name = 'Ejder'

console.log(userr);
console.log(userr2);