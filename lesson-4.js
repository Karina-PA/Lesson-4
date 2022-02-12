let num = 4;
let str = 'String';
let bln = 4 > 5;

// сложение
console.log(str + bln);
console.log(str + num);
console.log(num + bln);

// умножение
console.log(str * bln);
console.log(str * num);
console.log(num * bln);

// деление
console.log(str / bln);
console.log(str / num);
console.log(num / bln);

// явное преобразование
num = String(num);
    console.log(typeof num);
str = Boolean(str);
    console.log(typeof str);
bln = Number(bln);
    console.log(typeof bln);