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

const langSet = new Set(languages)

console.log(langSet)
console.log(langSet.size);

const counts = []

for(let l of langSet){
    const filteredLang = languages.filter(lng => lng === l)
    counts.push({
        language: l,
        count: filteredLang.length
    })
}

console.log(counts);