// This is my first JavaScript Code!


console.log('Hello World');
	   //  在控制台输出一条日志信息
	   //  js 的注释：     "//(单行)""/**/(多行)"
	   //  js所有的语句都要以;结尾

//  variables:
//  不能用标识符
//  不能以数字开头
//  不能有空格和"-"
//  firstName(驼峰命名法)
//  区分大小写
//  let firstName = 'mash', lastname = 'Hamedani';
let name  = 'Mosh';     				 //String Literal
let age = 30;									 //Number Literal 
let isApproved  = true;	 			  //Boolean Literal
let firstName = undefined;		//undefined既是类型也是值
															// js中变量的默认值就是undefined
let lastname = null;				     //清空一个变量的值的时候就用null
console.log(name);

// value types : string  number  boolean  undefined null 
//  js中number没有像别的语言中的fload double类型
// reference types : object  array  function

//  constants: 
// can't change the value, otherwise output a error
const interestRate = 0.3;
console.log(interestRate);

// console : typeof 返回变量类型
// ctrl + l : console 清屏

// js是动态语言，数据类型可以直接变化，不像别的语言中指定类型就只能相同类型进行转化

// object:
let person = {
	name : 'Mosh',
	age : 30
};

//  Dot Notation
person.name = 'John';

// 	Bracket Notation
person['name'] = 'mary';

// 点和括号都可以访问object的属性值
let seclection = 'name';
person[seclection] = 'Jack'

// console.log(person);
console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
// console.log(seclectedColors[0]);
console.log(selectedColors.length)

// 由于js是动态语言，js数组中可以存储不同类型
// 并且数组存储的对象长度都是动态的

// functions:
// performing a task
function greet(name){
	console.log('Hello ' + name);
}
// 函数末尾不用加";"

// calculating a value
function square(number){
	return number *  number;
}

greet('john');
greet('mary');

// let number  = square(2);
// console.log(number);

console.log(square(2));

// operators(操作符):
// 操作、赋值、比较、逻辑、位元

let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// increment(++)
// console.log(++x);
console.log(x++);

// decrement(--)
// same with increment(++)

x += 5
console.log(x)

// 比较运算符:
console.log(x > 0);
// equal
// Strict Equality(Type + value)
console.log(x === 16);		// more used
console.log(x !== 16);

// Lose Equality
console.log(1 === '1');
console.log(1 == '1');

// 三元运算符:
let points = 100;
let type = points > 100 ? 'gold' : 'silver';
console.log(type)

// logical operator:
console.log(true && true);
console.log(false || false);
console.log(!true);

// non boolean operator:
// 类假：Falsy (false): undefined , null , false , 0 , '', NaN
// 除了Falsy剩下的就是类真
console.log(false || 1 || 2)  			// -> 1
// 碰到第一个运算符就返回

// 利用逻辑运算符机制实现默认值
// let usecolor = 'red';
let usecolor = undefined;
let defaultcolor =  'blue';
let currentcolor = usecolor || defaultcolor;
console.log(currentcolor);

// 位运算符:
console.log(1 | 2);
console.log(1 & 2);

// 通过位运算可以添加权限
// 0000
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let mypermission = 0;
mypermission = mypermission | writePermission;
let message = (mypermission & readPermission) ? 'yes' : 'no';
console.log(message);