// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {Ваши преобразования}
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

function CheckAge1(age_data) {
let age_2 = 18;
let age_3 = 60;
if (age_data < age_2)
    console.log(`You don't have access cause your age is ${age_data} It's less then.`);
    else if ((age_data >= age_2) && (age_data < age_3)) 
        console.log(`Welcome !`)
        else if (age_data > age_3) 
            console.log(`Keep calm and look Culture channel`)
            else 
                console.log(`Technical work`);
};

console.log('Задание 1');
CheckAge1(17);
CheckAge1(18);
CheckAge1(60); //Единственное значение, при котором выдается Technical work.
CheckAge1(61);


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
function CheckAge2(age_data) {
    console.log(typeof(age_data));
    if ((isNaN(age_data)) || (typeof(age_data) == 'string')) {
        console.log(`Для правильной работы введите значение возраста цифрой, без спецсимволов, пробелов и букв.`);
        return(1);
    }
    let age_2 = 18;
    let age_3 = 60;
    if (age_data < age_2)
        console.log(`You don't have access cause your age is ${age_data} It's less then.`);
        else if ((age_data >= age_2) && (age_data < age_3)) 
            console.log(`Welcome !`)
            else if (age_data > age_3) 
                console.log(`Keep calm and look Culture channel`)
                else 
                    console.log(`Technical work`);
    };

console.log('Задание 2');
CheckAge2('17');
CheckAge2('ssdf')
CheckAge2(true); //Пропускает к расчету, как значение - 1, в задании про это не слова. 
CheckAge2('true');
CheckAge2(17);
CheckAge2(18);
CheckAge2(60); //Единственное значение, при котором выдается Technical work.
CheckAge2(61);


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
function CheckAge3(age_data) {
    console.log(typeof(age_data));
    if ((isNaN(age_data)) || (typeof(age_data) == 'boolean')) {
        console.log(`Для правильной работы введите значение возраста цифрой, без спецсимволов, пробелов и букв.`);
        return(1);
    }
    
    let age_2 = 18;
    let age_3 = 60;
    if (age_data < age_2)
        console.log(`You don't have access cause your age is ${age_data} It's less then.`);
        else if ((age_data >= age_2) && (age_data < age_3)) 
            console.log(`Welcome !`)
            else if (age_data > age_3) 
                console.log(`Keep calm and look Culture channel`)
                else 
                    console.log(`Technical work`);
};

console.log('Задание 3');
CheckAge3('2');
CheckAge3('22');
CheckAge3('2f');

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
// см. html