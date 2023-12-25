// let user = {
//     name: "Alex", 
//     age: 29
// }
// let user_two = {
//     name: "Bob", 
//     age: 13
// }
// let user_three = {
//     name: "Michael", 
//     age: 25
// }
// let starshiy = []
// let mladshiy = []

// let starshiyage = (arr) => {
 
//     if(arr.age >= 18) {
//         starshiy.push(name)
//             } else {
//                 mladshiy.push(name)
//             }
//    }


// starshiyage(user)
// starshiyage(user_two)
// starshiyage(user_three)

// console.log(starshiy);
// console.log(mladshiy);



let chisla = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function summachisel(arr) {
    let sum = 0
    for(let chislo of arr) {
        sum += chislo
    }
    return sum
}

let result = chisla
console.log(result);


function findbolshoechislo(num) {
   let bignum = num[0]

   for(let i = 0; i < bignum; i++) {
    if(num[i] > bignum) {
        bignum = num[i]
    }
   }
}

let samoebolshoechislo = findbolshoechislo(chisla)
console.log(samoebolshoechislo);

function chetnoe(arr) {
    return arr % 2 === 0 
}
function obratnayastroka(stroka) {
    return stroka.split('').reverse().join('');
}

let isxodnayastroka = `Как вы Далер ака`

let obratnaya = obratnayastroka(isxodnayastroka)

console.log(obratnaya);

function sluchaynoechislo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let sluchch = sluchaynoechislo(1, 10);
console.log(sluchch);

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
let results = countVowels
console.log(results);




