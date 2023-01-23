ad = 'Goktug' // window scope

{
    let deneme = "Test"
    //console.log(deneme)
}

let name = 'Goktug'
let surname = 'Celikkaya'

function letsLearnScope() {
    // console.log(name, surname)
    if(true) {
        let name = 'Yusuf Veli'
        let surname = 'Toker'
        // console.log(name, surname)
    }
    // console.log(name, surname)
}
letsLearnScope()
// console.log(name, surname)

for (var i = 1; i <= 5; i++) {
    // console.log('i', i)
}
// console.log('son i', i)


const user = {
    name: 'Goktug',
    surname: 'Celikkaya',
    age: 21,
    isMarried: false,
    test:{
        deneme: 'Deneme Text'
    },
    'phone number': 25235235235,
    skills: [
        'HTML',
        'CSS',
        'JavaScript'
    ],
    siblings: [
        {
            name: 'Ejder',
            surname: 'Celikkaya'
        }
    ],
    getFullName2: () => `${user.name} ${user.surname}`,
    
    getFullName: function() {
        return `${this.name} ${this.surname}`
    }
}

let keyName = 'age'

const formatter = new Intl.ListFormat('tr', { style: 'long', type: 'conjunction' });

user.name = 'Goktug'
user.title = 'Developer'
user.country = 'Turkey'
user.skills.push('React')
user.skills.push('Vue')

user.getPersonInfo = function() {
    // let skillsWithoutLastOne = this.skills.splice(0, this.skills.length - 1).join(', ')
    // let lastSkill = this.skills.at(-1)
    // let skills = `${skillsWithoutLastOne} and ${lastSkill}`
    let skills = formatter.format(this.skills)
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}  

console.log(user.getPersonInfo())