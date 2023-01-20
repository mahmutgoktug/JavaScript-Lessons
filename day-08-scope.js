ad = 'Goktug' // window scope

{
    let deneme = "Test"
    console.log(deneme)
}

let name = 'Goktug'
let surname = 'Celikkaya'

function letsLearnScope() {
    console.log(name, surname)
    if(true) {
        let name = 'Yusuf Veli'
        let surname = 'Toker'
        console.log(name, surname)
    }
    console.log(name, surname)
}
letsLearnScope()
console.log(name, surname)

for (var i = 1; i <= 5; i++) {
    console.log('i', i)
}
console.log('son i', i)