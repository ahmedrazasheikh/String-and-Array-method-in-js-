// Remove White Space from both sides// 
const name = '       Ahmed Raza Jafri   '
console.log(name.trim())
console.log(name.trimEnd())
console.log(name.trimStart())

const stringObj = new String('Hassan Bhai ');
console.log(stringObj.valueOf());
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());
// value in string through index
const fullname = "Ahmd RAza"
console.log(fullname.substring(1,4));
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.split(''));


const family = ["Ahmed " , "Raza " , "Saad" , "Hassan " , "Nadeem" , "Saima" ]
console.log(family.slice(1,3));
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
console.log(paragraph.search('quick'));
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replaceAll('lazy', 'Lazy Person is a Rish Person '));
console.log(p.replace('lazy', 'Lazy Person is a Rish Person '));

const nameofKing = "I Love You Ahmed Raza  "
console.log(`${nameofKing.repeat(100000)}`)

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'foxw';
console.log(sentence.includes(word));

const months = ['Jan', 'March', 'April', 'June'];
console.log(months);
months.splice(1, 0, 'Feb');
console.log(months);
const ages = [32, 33, 16, 40];
const FilterValue = (value)=>{
    return value > 32
}
const FindValue = (value)=>{
    return value > 32
}
 console.log(ages.filter(FilterValue))  
 console.log(ages.find(FilterValue))  


