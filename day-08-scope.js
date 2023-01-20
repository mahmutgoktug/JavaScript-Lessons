ad = 'Goktug' // window scope

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