// This is my Fifth JS code!


// Function

// Function Declaration:
function walk(){
    console.log('walk');
}

// Anonymous(匿名函数) Function Expression
let run  = function (){
    console.log('run');
};

/*
// Named(匿名函数) Function Expression
let run  = function walk(){
    console.log('run');
};
*/

// 函数声明结尾不用加分号，但常量和变量声明结尾要加分号

// Hoisting(提前):
// 函数声明可以在函数声明之前调用函数， 但函数表达式必须在函数表达式之后调用
// 因为JS引擎在运行程序的时候会把所有函数声明放在最顶端

let move = run;

run();
move();

// Arguments:

// function sum(){
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum()); => NaN(Not a Number)


// The rest operator:
// function sum(){
//     // 区分拆分操作符和余下操作符
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

function sum(...args){
    // 区分拆分操作符和余下操作符
    // 余下操作符会将所有参数作为一个列表返回：[ 1, 2, 3, 4, 5 ]
    return args.reduce((a, b)=>a + b);
}
console.log(sum(1, 2, 3, 4, 5));

// 余下参数必须是参数的最后一个，不能在余下参数后面还添加参数
function calc_price(discount, ...prices){
 const total =  prices.reduce((a, b)=> a + b);
 return total * (1 - discount);
}
console.log(calc_price(0.1, 20, 30))

// Default Parameters:
function interest(principal, rate=3.5, years= 5){
    // rate = rate || 3.5;
    // years = years || 5;
    // 旧版是上面这么设置

    return principal * rate /100 * years;
}
console.log(interest(10000));
// 新版设置函数默认值，尽量将设置默认值的参数放在最后，避免使用undefined value

// Getters and Setters
const person = {
    firstName: 'Mosh',
    lastName:'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){

        if (typeof value !=='string') 
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if(parts.length !==2)
            throw new Error('Enter a first and last name.');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// getters => access properties
//setters => change(mutate)them

// try and catch:

try{
    // person.fullName = null;
    person.fullName = 'john smith';
}
catch (e){
    // alert(e);
    console.log(e);
};

console.log(person);

// local vs global scope(作用域):
// 本地变量或者常量会自动覆盖同名的全局变量或者常量
// 慎用全局变量，要不某个函数改变了值的话就会非常糟糕
const color = 'red';
function start(){
const message = 'hi';
}
function stop(){
    const message = 'bye';
}

// Let vs Var:
function start(){
    for(var i =0; i < 5; i++){
        console.log(i);

    }
    console.log(i)
}
start();

// Let and Const 声明的是作用域为代码块的量
// Var声明的是以函数为作用域的量
// 避免使用var关键字

var color1 = 'red';
let age = 30;
// var声明的变量会增加到window对象
// let声明的变量不会增加到window对象
// function 会添加到window 对象
// 但将function添加到modules中,function就不会添加到window对象

// the "this" keyword:

// method ->obj
// function(正则函数) -> global (window, global)

const video = {
    title:  'a',
    tags : ['a', 'b', 'c'],
    play(){
        console.log(this);
    },
    showTags(){
        const self =this;

        this.tags.forEach(function(tag){
            console.log(self.title, tag);
        },this);
        // 为了应对回调函数是正则函数，
        // 在forEach()方法中的第二个参数处thisArg可以绑定想要绑定的对象，如：this
        // 但并不是所有的函数都有第二个参数可以绑定this
        // 就在函数一开始加上const self = this;指向当前的对象，调用回调函数的时候用self.就可以
    }
};

// 回调函数是正则函数，不是对象中的方法

video.play();
video.showTags();

function Video(title){
    this.title = title;
    console.log(this);
}

const v = new Video('b');           // {}

// 当使用new操作符的时候，创建了一个新的空对象，并将构造函数中的this绑定到这个空对象身上

function playVideo(a, b){
    console.log(this);
}

playVideo.call({name: 'Mosh'}, 1, 2);
playVideo.apply({name: 'Mosh'}, [1, 2]);
const fn = playVideo.bind({name: 'Mosh'})
playVideo.bind({name: 'Mosh'})();
// call可以将正则函数绑定到任意对象,apply也可以，两者唯一的不同就是输入实参的方式不同
// call()是直接输入, apply()则需要输入数组
// bind()直接返回

fn();