let a = null;
let b = null;

a = 50;
b = 20;

let c = (a + b)/(a * b);

console.log('Variable c =', c);
console.log(`${c}, ${a}, ${b}`);
console.log('Summ =',a+b+c,'Delta =',a-b,'Modulo =', a%b);

function TripleDIV(x,y)
{
    return ((x*y)%(x+y))*3;
};

console.log ('TripleDIV = ',TripleDIV(a,b));

function BoringNumSimple(x)
{
    console.log('Simple version');
    if (x%5 == 0) 
        console.log('Число %d делится на 5!', x);
    else {
        if (x%11 == 0) 
            console.log('Число %d делится на 11!', x);
        else { 
            console.log('%d - скучное число...', x);
        }
    }        
};


function BoringNumPro(x)
{
    console.log('Pro version');
    let output_x = String(x);
    if (isNaN(x)) {
        console.log(`${output_x} - это не число!`);
        return;
    }
    if (!(x % 1) == 0) {
        console.log('Число %d дробное и скучное...', x);
        return;
    }
    if ((x>Number.MAX_SAFE_INTEGER) || (x<-Number.MAX_SAFE_INTEGER)) {
        console.log('%d - cлишком большое число.', x);
        return;
    }
    if ((x == null) || (x == 0)) {
        console.log('Ноль делить не хочу.');
        return;
    }
    if (x%5 == 0) 
        console.log('Число %d делится на 5!', x);
    else {
        if (x%11 == 0) 
            console.log('Число %d делится на 11!', x);
        else { 
            console.log('%d - скучное число...', x);
        }
    }        
};

const rl1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl1.question("Enter number to test it's boring (simple version): ", (num) => {
    BoringNumSimple(num)
    BoringNumPro(num)
    rl1.close();
});