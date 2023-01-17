// syntax
// if (condition) {
    // this part of code runs for truthy condition 
// }

// let num = 3
// if (num > 0) {
//     console.log(`${num} is a positive number`)
// } else {
//     console.log(`${num} is a negative number`)
// }

//    let num2 = -3
//    if (num2 > 0) {
//        console.log(`${num} is a positive number`)
//    } else {
//        console.log(`${num} is a negative number`)
//    }

// let result = prompt('2 + 5 kaç eder ?')
// if (result == '7') {
//     console.log('Doğru cevap!!')
// } else {
//     console.log('Yanlış cevap verdin, git matematik çalış!')
// }

// console.log(
//     result == '7' ? 'DOĞRU CEVAP' : 'YANLIŞ CEVAP'
// )

// switch(result) {
//     case '7':
//         console.log('Doğru cevap ! - switch')
//     break

//     case '5':
//         console.log('Cevap hatalı ama doğru yoldasın.. - switch')
//     break

//     default:
//         console.log('Cevap hatalı !! - switch')
// }

// let number = 5
// if (number == 4) {
//     //
// } else if (number => 5) {
//     // eğer koşu sağlanıyorsa aşağıdaki satılara bakılmaz!
// } else if (number > 5) {
//     //
// } else {
//     //
// }


// EGZERSİZLER

// let result = prompt('Yaşınızı Giriniz')
// if (result >= 18) {
//     console.log('Araba sürmek için yeterince yaşlısınız')
// } else if ( result == 15) {
//     console.log('3 yıl sonra araba sürebilirsiniz')
// } else {
//     console.log('Araba sürmek için çok gençsiniz')
// }


// let myAge = 30
// let yourAge = prompt('Yaşınızı Giriniz')
// let result = yourAge - myAge

// if (myAge > yourAge) {
//     console.log('Ben senden büyüğüm')
// } else if (myAge < yourAge ) {
//     console.log(`Sen benden ${result} yaş kadar büyüksün`)
// }


// let a = 4
// let b = 3

// if (a > b) {
//     console.log(`${a} is greater than ${b}`)
// } else {
//     console.log(`${b} is greater than ${a}`)
// }

// console.log(
//     a > b ? (`${a} is greater than ${b}`) : (`${b} is greater than ${a}`)
// )


let nums = 2

if (nums % 2 == 0) {
    console.log(`${nums} is even`)
} else {
    console.log(`${nums} is an Odd`)
}