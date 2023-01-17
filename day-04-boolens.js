// && ampersand operator example
    // true && true -> true
    // true && false -> false
    // false && false -> false

// || pipe or operator, example
    // true || true -> true      
    // true || false -> true      
    // false || false -> false

// ! negation examples 
    // let check = 4 > 3                // true
    // let check = !(4 > 3)             // false
    // let isLigthOn = true
    // let isLightOff = !isLightOn      // false
    // let isMarried = !false           // true


// KOŞULLAR "?"(ise) , ":"(değilse)

    //  let isRaining = true
    //  isRaining
    //  ? console.log('You need a rain coat.')
    //  : console.log('No need for a rain coat')
    
    //  let isRaining = false
    //  isRaining
    //      ? console.log('You need a rain coat.')
    //      : console.log('No need for a rain coat')

    //  let number = 5
    //  number > 0
    //    ? console.log(`${number} is a positive number`)
    //    : console.log(`${number} is a negative number`)
    //  number = -5

    //  number > 0
    //    ? console.log(`${number} is a positive number`)
    //    : console.log(`${number} is a negative number`)


// Window METHODS

    // let sayi = prompt('Bir Sayi Giriniz', '5')
    // let result = sayi * 2

    //console.log(result  )


    // let isDelete = confirm('Silmek istediğinize emin misiniz?')
    // console.log(
    //    isDelete ? 'Silme işlemi başarili' : 'Silme işlemi iptal edildi' 
    // )


// Creating a time object

    // const date = new Date()
    // console.log(date) // Tue Jan 17 2023 15:44:32 GMT+0300 (GMT+03:00)

    // const now = new Date()  
    // console.log(now.getMonth()) // 0 because the month is January


    const date = new Date()

    let year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        dayNumber = date.getDay()

let months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]

let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
]

let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}`
console.log(humanReadableDate)

// 17 Ocak 2023, Salı, 16:10:00
    