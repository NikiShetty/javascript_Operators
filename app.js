//Arithmetic Operators:

var num1 = 10;
var num2 = 5;
var val = num1 + num2;
var val = num1 - num2;
var val = num1 * num2;
var val = num1 / num2;
var val = num1 % num2;
var val = 3 ** 3;
console.log(val);

//------------------------------------------------------------
//operator precending
console.log(10 + (20 + 30) - 10);
console.log(10 + (40 - 30) * 10);
//--------------------------------------------------------------

//Assignments:
var x = 5;
x += 50;
x -= 30;
x *= 10;
x /= 5;
x %= 5;
console.log(x);
//--------------------------------------------------------------

//String Operators
var str = "Hello";
var str1 = "World";
console.log(str + " " + str1);
console.log(20 - 5 + "Hello" + 20 + 10); //15Hello2010
console.log(20 - 5 + "Hello" + 20 - 10); NaN
console.log(20 - 5 + "Hello" + 20 / 10); //???????????  15Hello2
//--------------------------------------------------------------

//Strings
"hello"----string
"654353" ---- numeric string;
"hello654353" ----Alpha- numeric string;
//--------------------------------------------------------------

//Pre and Post increment and decrement
//Pre:
var val = 5;
console.log(++val); //6
console.log(val); //6
console.log(--val); //5

//Post:
var val = 5;
console.log(val++); //5
console.log(val); //6
console.log(val--); //6
console.log(val); //5
//--------------------------------------------------------------

//comparisons Operators:
var num1 = 5;
var num2 = "5";
console.log(num1 == num2); //true
console.log(num1 === num2); //false
console.log(num1 != num2); //false
console.log(num1 !== num2); //true
console.log(num1 > 10); //false
console.log(num1 < 10); //true
console.log(num1 >= 5); //true
console.log(num1 < 10); //true
//--------------------------------------------------------------

//Logical Operators:
//&&,||,!
var val1 = 10;
var val2 = 20;
console.log(val1 == 10 && val1 < 20); //true
console.log(val1 == 10 || val1 > 20); //true
console.log(undefined == null); //true
console.log(undefined === null); //false
//--------------------------------------------------------------

//Tasks:

//1)var x = ++num//num = 20

var num = 20;
var x = ++num;
var y = num++;
console.log(x); //21
console.log(y); //21
//--------------------------------------------------------------

//2)var x = ++num//num = 20

var num = 20;
var x = num++;
console.log(x); //20
//--------------------------------------------------------------

console.log((10 + 90) * (250 + 100));
//35000;

console.log(true == false); //false

console.log(true == false) < 2; //false

console.log(true === false); //false

//--------------------------------------------------------------

var num = 10;
var num1 = 2;
console.log(num ** num1 + (90 + 9) / 90); //101.1