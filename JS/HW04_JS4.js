// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
// console.log('Задание 1');
// let i = 1;
// let n = 10;
// while (i <= n) {
//     console.log(`2^${i} = ${2 ** i}`);
//     i++;
// }


// // 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
// function Expo (n) {
//     let i = 1;
//     while (i <= n) {
//         console.log(`2^${i} = ${2 ** i}`);
//         i++;
//     }
// }

// console.log('Задание 2');
// Expo(4);
// Expo(7);


// // 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// // Пример в консоли:
// // :)
// // :):)
// // :):):)
// // :):):):)
// // :):):):):)
// console.log('Задание 3');
// let i_2 = 1;
// let NewString = '';
// while (i_2 <= 5) {
//     NewString = NewString + ':)'
//     console.log(NewString);
//     i_2++;
// }


// // 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// // e.g. function printSmile(stroka, numberOfRows)
// function HillOut (AddStr,Count) {
//     let i_3 = 1;
//     let NewString = '';
//     while (i_3 <= Count) {
//         NewString = NewString + AddStr;
//         console.log(i_3 + ' ' + NewString);
//         i_3++;
//     }
// }

// console.log('Задание 4');
// HillOut(':.',20);

function divisibleBy(numbers, divisor) {
    let res = [];
    let i = 1;
    console.log(numbers);
    while (i < numbers.length){
        console.log(numbers[i]);
        if (numbers[i]%divisor == 0)
            res = res + numbers[i];
        i++
        }
    return res;    
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
  


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
function getWordStructure(word) {
    const words_a = s => s.split("").filter(c => "aeiouyAEIOUY".includes(c)).length;
    const words_b = s2 => s2.split("").filter(c2 => "bBcCdDfFjJhHjJkKlLmMnNpPqQrRsStTvVwWxXzZ".includes(c2)).length;
    console.log(`Слово ${word} состоит из ${words_a(word)} гласных и ${words_b(word)} согласных букв.`); 
}

// // Проверки: 'case', 'Case', 'Check-list'
// console.log('Задание 5');
// getWordStructure('case');
// getWordStructure('Case');
// getWordStructure('Check-list');


// // 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// // e.g. function isPalindrom(word)
// function isPalindrom(word_safe) {
//     let word = word_safe.replace(/[^a-zа-яё]/gi, '').toLowerCase();
//     let dorw = word.split('').reverse().join('');
//     // console.log(`${word_safe} - ${word} - ${dorw}`);
//     if (word == dorw) 
//         console.log(`${word_safe} - это палиндром.`)
//         else {
//             console.log(`${word_safe} - это НЕ палиндром.`)            
//         }
//     return;
// }

// // Проверки: 'abba', 'Abba'
// isPalindrom('abba');
// isPalindrom('Abba');
// isPalindrom('ald o dla');
// isPalindrom('а роза упала %33 * № на лапу азора');
// isPalindrom('А роза упала на лапу азора');
// isPalindrom('Непалидромный текст');