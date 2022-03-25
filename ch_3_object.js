// This is my Third JS code!


// object: Object-oriented Programming (OOP)
let circle = {
    radius :1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();      // Method

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory Function:Camel Notation
function createCircle (radius, location){
    return {
        radius,
        // JS中如果键和值是一样的就可以删除值就保留key
        // 函数中放入函数的时候可以去掉function关键字
        draw (){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// Constructor Function:Pascal Notation
// Constructor Function:面向学c#和java的人
function Circle(radius){
    this.radius = radius;
    // this represents a empty object
    this.draw = function (){
        console.log('draw');
    }
}

const circle_constructor = new Circle(1);
// const x = {};

// Dynamic Nature of Objects:
const circle3 = {
    radius: 1
};
// 常量的意思是不能再重新声明这个变量了
// 但是可以通过增加或删除成员来修改他指向的对象的
circle3.color = 'yellow';
circle3.draw = function() {}
delete circle3.color;
delete circle3.draw;

console.log(circle3);

// Constructor properties
// 每一个对象都有一个构造器属性(Constructor)，他引用了创建该对象的构造函数

// funtions are object:
// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function (){
//     console.log('draw');
// }
// `)
// const circle4 = new Circle1(1);

// value types and reference types
// let x = 10;
let x = { value: 10};
let y = x;           //实际复制的时对象的内存地址(x, y指向了同一个内存地址)

x.value = 20;
// 当使用对象的时候，对象不保存在变量中，对象的实体保存在内存中的某个地方
// 变量中保存的是对象实体的内存地址
// value type复制value，referenece type复制引用(reference)

let number = 10;
function increse(number){
    number++;
    // 函数结束后函数中的这个number就消失了
}

increse(number);
console.log(number);

let obj = { value: 10};

function increse(obj){
    obj.value++;
}

increse(obj);
console.log(obj);

// enumerating properties of an object
const round = {
    radius : 1,
    draw(){
        console.log('draw')
    }
}

// for-in loop是最常使用的
for  (let key in round)
    console.log(key, circle[key]);

 // for-of组合只能用作可枚举的类型，如：数组和映射
//  对象是不可枚举的类型
for (let key of Object.keys(round))
// Object.keys()返回数组
    console.log(key)

// function Object() {}
// const x = {value : 1} 
// 在某个地方会调用Object构造方法, 相当于执行下面的语句
// const x = new Object()

for (let entry of Object.entries(round))
// F2将key重命名为entry,这样会自动重命名所有关联的名字
// Object.entries()返回字符串
    console.log(entry)

// 判断一个对象中是否有以下属性
if ('radius' in round) console.log('yes');

// clone a object

// method1:
// const another = {};
// for (let key in round)
//     another[key] = circle[key];

// method2:
// const another = Object.assign({
//     color:'yellow'
// }, round)

// method3: easiest method
const another = { ...round};
// ...拆分运算符
console.log(another);

// c语言和c++创建对象需要分配内存,对象使用后需要回收分配的内存,JS中有垃圾回收机制
// 即找出不再使用的变量和常量,回收他们的内存,内部运行,外部人员无法控制

// 常用对象:
// 1. Math:

// please see the google result for "javascript math"

// 2. String:

// String primitive
const message = 'This is my \nfirst message.';
// 在运行message.的时候,js引擎把message转为了String对象

// 3. String Object
const another1 = new String('hi');

// 4. Template Literals:(不用加转义字符)        模板语法
// 反双引号
const another2 = `This is my 
first message!`
console.log(another2);

const name1 = 'John'
const another3 = 
`Hi ${name1},

Thank you for joining my mailing list

Regards,
Mosh`;
console.log(another3);

// 5.Date
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

// now.toISOString() 是将时间传给服务器的方法



