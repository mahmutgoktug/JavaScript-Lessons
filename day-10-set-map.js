const names = ['Mahmut', 'Mahmut', 'Mahmut', 'Goktug', 'Goktug', 'Goktug', 'Celikkaya']
// const namesSet = new Set();

// for (let name of names){
//     namesSet.add(name)
// }

// console.log(
//     namesSet.has('Mahmut')
// );

console.log([... new Set(names)]);


const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

// const langSet = new Set(languages)

// console.log(langSet)
// console.log(langSet.size);

// const counts = []

// for(let l of langSet){
//     const filteredLang = languages.filter(lng => lng === l)
//     counts.push({
//         language: l,
//         count: filteredLang.length
//     })
// }

// console.log(counts);

const a = [1, 2, 3, 4, 5]
const b = [3, 4, 5, 6]

// const c = [ ...a , ...b]

// console.log(new Set(c));

// const B = new Set(b)
// const C = new Set(a.filter(num => B.has(num)))

// console.log(C);

let B = new Set(b)
console.log(
    a.filter(num => !B.has(num))
)