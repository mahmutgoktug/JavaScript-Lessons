for (let i = 1; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

const names = ['Goktug', 'Ejder', 'Sahure', 'Tugba', 'Celikkaya']

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}


let numbers = [5, 10 ,15]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log('Toplam', sum)

let countries = ['Turkey', 'England', 'Sweden']
let newCountries = []

for (let i = 0; i < countries.length; i++) {
    newCountries.push(countries[i].toUpperCase())
}

console.log(newCountries)

let i = 0
while (i < names.length) {
    console.log('İsim', names[i])
    i++
}

do {
    console.log('İsim', names[i])
    i++
} while (i < names.length)

for (let name of names) {
    if (name == 'Ejder') {
        console.log(`${name} es geçildi.`)
        continue
        // continue eğer bu koşulun ekranda gözükmesini istemiyorsan kullanılır.
    }
    if (name == 'Tugba') {
        console.log(`${name} bulundu.`)
        break
        // continue eğer bu koşulun ekranda gözükmesini istemiyorsan kullanılır.
    }
    console.log('AD', name)
}