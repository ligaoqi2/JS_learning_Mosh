// This is my second JS code!


// if-else:
// Hour 
// If hour is between 6am and 12 pm :Good Morning !
// If hour is between 12pm and 6 pm :Good Afternoon !
// otherwise: Good Evening!

let hour = 10;

if (hour >= 4 && hour < 12)
    console.log('Good Morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');

// switch-case:
let role = 'guest';

switch(role){
    case 'guest': 
        console.log('guest user');
        break;
    case 'moderator':
        console.log('moderator user');
        break;
    default : 
        console.log('unknown user');
}

if (role === 'guest') console.log('guest user');
else if (role === 'moderator') console.log('moderator user');
else console.log('Unknow user');

// loops: for, while, do-while, for-in, for-of
//  for and while loop most time 
// for:
// 多句代码就需要加上大括号
for (let i = 0; i<=5; i++){
    if (i % 2 !== 0) console.log('Hello World!', i);
}

for (let i = 5; i>=1; i--){
    if (i % 2 !== 0) console.log('Hello World!', i);
}

// while:
let i = 0;
while (i <= 5){
    if (i % 2 !== 0) console.log('Hello World!', i);
    i++;
}

// do-while:
// 不管条件如何，都会先运行一次循环
let j = 0;
do {
    if (j % 2 !== 0) console.log('Hello World!', i);
    j++;
} while (j <= 5)

// infinite loop:
// 无限循环必须强制关闭浏览器或者ide
// while (true){
//     statement
// } 

// for-in:
const person = {
    name: "Mosh",
    age: 30 
};

for (let key in person)
    console.log(key, person[key]);

    const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

    // for-of:(在数组循环上更好)
for (let color of colors)
    console.log(color);

// break and continue
let k = 0;
while(k <= 10){
    // if ( k===5 ) break;
    if (k % 2 ===0){
        k++;
        continue;
    }
    console.log(k);
    k++;
}
