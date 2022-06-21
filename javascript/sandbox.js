// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// /* older way of creating variables */
// var score = 75;
// console.log(score);

// const title = 'Best Blog';
// const author = 'Mario';
// const likes = 30;

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);


// // creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `

// console.log(html);

// // strict comparison (different types cannot be equal)
// let age = 25;
// console.log(age === 25); // true
// console.log(age === '25'); // false 

// // function declaration
// function greet() {
//     console.log('hello there');
// }

// // function expression
// const speak = function (name = 'luigi', time = 'night') {
//     console.log(`good ${time}, ${name}!`);
// };

// // hoisting works for declarations not expressions 
// // can have default arguments

// speak();
// speak('kathy');
// speak('kathy', 'evening');

// // regular function
// const calcAre = function (radius) {
//     return 3.14 * radius ** 2;
// };

// // arrow function (need parentheses around parameters if more than 1) 
// const calcArea = radius => 3.14 * radius ** 2;


// const area = calcArea(5);
// console.log('area is:', area);

// const greet = () => 'hello, world';

 
// const myFunc = (callbackFunc) => {

// }

// const ul = document.querySelector('.people');

// let people = ['kathy', 'tathy', 'rathy', 'pathy']

// // const logPerson = (person, index) => {
// //     console.log(`${index} - hello ${person}`);
// // };

// // // people.forEach((person, index) => {
// // //     console.log(index, person);
// // // });

// // people.forEach(logPerson);

// let html = ``;

// people.forEach(person => {
//     // create html template
//     html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;


// object literals

// an array of objects, each {} is an object and they are comma separated
// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50}
// ]

// console.log(blogs);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'abc@gmail.com',
//     location: 'berlin',
//     blogs: [
//         { title: 'why mac & cheese rules', likes: 30 },
//         { title: '10 things to make with marmite', likes: 50 }
//     ],
//     login: function() {
//         console.log('the user logged in');
//     },
//     logout() {
//         console.log('the user logged out');
//     },
//     logBlogs() {
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// console.log(user);
// console.log(user.name);

// user.age = 35;

// console.log(user.age);

// const key = 'location';

// console.log(user[key]);

// user['name'] = 'chun-li';

// console.log(user['name']);

// console.log(typeof user);

// user.login();
// user.logout();
// user.logBlogs();

// Math object

console.log(Math);
console.log(Math.PI);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();
console.log(random);

console.log(Math.round(random * 100));