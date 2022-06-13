let a = null;
let b = null;

a = 50;
b = 20;

let c = (a + b)/(a * b);

console.log('Variable c =', c);
console.log('Summ =',a+b+c,'Delta =',a-b,'Modulo =', a%b);

function TripleDIV(x,y)
{
    return ((x*y)%(x+y))*3;
};

console.log ('TripleDIV = ',TripleDIV(a,b));

function BoringNum(x)
{
    if (x%5 == 0) 
        console.log('Число %d делится на 5!', x);
    else
        if (x%11 == 0) 
            console.log('Число %d делится на 11!', x);
        else 
            console.log('%d - скучное число...', x);
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter number to test it's boring: ", (num) => {
  BoringNum(num)
  readline.close()
})