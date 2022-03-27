// This is my Fourth JS code!


// Arrays

// Adding  Element:
const numbers = [3, 4];
// const 意为不能将numbers声明为其他的值，但修改数组元素是可以的
numbers.push(5, 6);     //数组元素加到末尾

numbers.unshift(1, 2);  //数组元素加到开头

numbers.splice(2, 0, 'a', 'b');               //指定位置添加元素

console.log(numbers);
// 移动某一行语句可以按住alt键加上下键

// Find Element(primitives):
const numbers1 = [1, 2, 3, 4];
console.log(numbers1.indexOf('a'));
// 返回第一个匹配的索引
// 返回最后一个匹配的索引: lastIndexOf()
console.log(numbers1.includes(1));

// Find Element(objects)
const courses = [
    { id:1, name:'a'},
    { id:2, name:'b'},
];

// const course = courses.find(function(course){
//     return course.name === 'a';
// })
// // findIndex() 返回找到结果的第一个序号

// Arrow functions(箭头函数):
const course = courses.find(course => course.name === 'a');
console.log(course);

// Remove Element:
const numbers2 = [1, 2, 3, 4];

// const last = numbers2.pop();            //删除末尾的元素
// console.log(numbers2);
// console.log(last);

// const first = numbers2.shift();            //删除开头的元素
// console.log(numbers2);
// console.log(first);

numbers2.splice(2, 2);                               //删除第二个位置元素
// splice(删除元素开始的索引， 删除的元素个数)
console.log(numbers2);

// Emptying an Array:
let numbers3 = [1, 2, 3, 4];
let another = numbers3;

// solution 1(recommend)
// numbers3.length = 0;

// solution 2 
// numbers3.splice(0, numbers3.length);

// solution3(not recommend)
// while (numbers3.length>0)
    // numbers3.pop();

// combining and slicing an array:(primitives)(objects will be its reference)
const first = [1, 2, 3];
const second = [4, 5, 6];
// const combined = first.concat(second);

// const slice = combined.slice(2, 4);
// // slice(): 切片

// console.log(combined);
// console.log(slice);

// The Sperator Operator(...):
const combined = [...first, ...second];
// ...拆分每一个数组中的每一个元素
// const copy = combined.slice();
const copy = [...combined];
// slice()中不加任何参数相当于复制原数组

// itrating an array:
const numbers4 = [1, 2, 3];
console.log(numbers4);
for (let number of numbers4)
    console.log(number);

numbers4.forEach((number, index) => console.log(index, number));

// Joining Arrays:
const joined = numbers4.join(',');
// join:数组转变为字符串
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);
const combine = parts.join('-')
// join()在合成URL地址的时候非常有用
console.log(combine)

// Sorting Arrays:
const numbers5 = [2, 3, 1];
numbers5.sort();
console.log(numbers5);
numbers5.reverse();
console.log(numbers5);


const courses1 = [
    {id: 1, name:'Node.js'},
    {id :2, name:'javaScript'},
];
courses1.sort(function(a, b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses1)

// Testing the elements of an array
// every:是否全部满足
// some:判断有没有满足的
// every和some是新版JS才有的
const numbers6 = [1, -1, 2, 3];
const atLeastOnePositive = numbers6.some(function(value){
    return value >=0;
});

// const atLeastOnePositive = numbers6.some(v => v >=0)

console.log(atLeastOnePositive);

// filtering an array(筛选数组)
const numbers7 = [1, -1, 2, 3];
// const filtered = numbers7.filter(function(value){
//     return value >= 0;
// });
const filtered =  numbers7.filter(v => v >= 0)
console.log(filtered);

/*
// self_callback

function add(a, b){
    return a + b;
}

function calculate(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calculate(2, 3, add));
*/


// self-filter-toReverse
function turnToReverse(arr){
    for (let i in arr){
        if (arr[i]<=0) {
            arr[i] = -arr[i];
        }
    }
    return arr;
}

function filter_self(arr, callback){
    return callback(arr)
}

let numbers8 = [-1, -2, -3, 1, 2, 3];
console.log(filter_self(numbers8, turnToReverse))


// mapping an array:

const numbers9 = [1, -1, 2, 3];
// const filtered1 = numbers9.filter(n => n>=0);

// const items = filtered1.map(n => '<li>' + n +'</li>');
// const html = '<ul>' + items.join('') + '</ul>';
// join():将列表转为字符串

// const items = numbers9.map(n => {
//     return  obj = { value: n }
// });

// const items = numbers9.map(n => {value: n});
// const items = numbers9.map(n => ({value: n}));
// 箭头函数返回对象的时候要加小括号


const items = numbers9
    .filter(n=> n >=0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);

// reducing an array:
// array.reduce():将数组缩为一个单一的元素

const numbers10 = [1, -1, 2, 3];

// let sum = 0;
// for(let n of numbers10)
//     sum += n;

const sum = numbers10.reduce((accumulator, currentValue) => accumulator+ currentValue);
//  a = 0, c = 1 => a =1
//  a = 1, c = -1 => a =0
//  a = 0, c = 2 => a =2
//  a = 2, c = 3 => a =5
// accumulator:累加值

console.log(sum);