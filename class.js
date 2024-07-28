// ! DataType များစစ်ခြင်း

/* let name= 'bobo';
let dateOfBirth ='23';
let gender = `male`;
let isMarriged = false;
const PI = 3.14;
let total = name / dateOfBirth;
console.log(total);
console.log("hello",typeof(total));
console.log(dateOfBirth);
console.log(typeof(isMarriged));
console.log(typeof(gender));
console.log(typeof(PI));
console.log(PI); */

// ! String = "",'',``;
/*
let name = `bobo`, dateOfBirth = 24;address = `YGN`;
let  person = "name is "+name+"and age is "+dateOfBirth+`and address is `+address;
console.log(':>>',person);
 */
// ! Template String ${...};
/*
let perSon = `name is ${name.toUpperCase()} and age is ${dateOfBirth + 2} and address is ${address ?? 'Mandalay'}`;     
console.log(`:>>`,perSon);
 */
// ! Trim   // trim ဆိုတာ မလိုအပ်တဲ့ space တွေကို ဖယ်ထုတ်တာ
/* 
let email = "koko@gmail.com";
console.log('email', email.length)
let kokoEmail = " koko@gmail.com ";
console.log('kokoEmail :>> ', kokoEmail.length);
let kokoEmailTrim = kokoEmail.trim()
console.log('kokoEmail :>> ', kokoEmailTrim.length);
 */
// ! to change lower & upper case
/*console.log('email :>> ', email.toUpperCase());
console.log('email :>> ', email.toLowerCase());
*/
// ! methods

// let email = "Koko@gmail.com";
// let paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ducimus?";
// console.log("=>>" ,paragraph.split(" "));  // * * splitဆိုတာ string ကို aray ပြောင်းခြင်း
// let paragraphLorem =  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ducimus?";
// console.log(Lorem = paragraphLorem.split(","));
// console.log(Lorem[2]);
// const url = "http://127.0.0.1:5500/class.html";
// console.log('url :>> ', url.split("."));
// const a = email.slice(1,6); // **slice ဆိုတာ ကိုဖျက်ချင်တဲ့အပိုင်းကို ဖျက်မယ် ရှေ့ကစဖျက်ချင်တာ နောက်က ဆုံးချင်တဲ့နေရာ (start,end)
// console.log(a);
// const b = url.substring(2,5);
// console.log(url.length)
// console.log('url :>> ', url.substring(2,10)); // ** string ကလည်းဖျက်တာ (start,end)
// console.log('url :>> ', url.substr(0,16)); // ** substr ကလည်းဖျက်တာ (start,length)
// console.log('email :>> ', email.includes('g')); // ** includes method က ပါလားမပါလားစစ်တာ သူက boolean နဲ့ output ပြန်ထုတ်ပေးတယ်
// console.log('email :>> ', email.replace('Koko',"MaungMaung")); // ** ကိုယ်ဖယ်ချင်တဲ့နေရာမှာ နောက်တစ်ခုနဲ့အစားထိုးခြင်
// console.log('email :>> ', email.includes('e'));
// let number = 230.3343434;
// console.log(number.toFixed(2));

// !object
// const user = {
//     name : 'koko',
//     age : 23,
//     email : 'koko@gmail.com',
//     isDev : true,
//     hobbies : ['reading','painting','coding'],
//     friends : ['Jane','Alice'],
//     address : {
//         street : 'Hnin si street',
//         city : 'Yangon',
//         state : "Yangon",
//     },
//     getInfo (){
//         console.log(this);
//         return `name is ${this.name} age is ${this.age} live in ${this.address.city}`
//     }
// }
// console.log('user',user);
// console.log('user.hobbies',user.hobbies[1])
// console.log('user Info',user.getInfo());

// let {name,age,email,isDev,city,state}=user;
// // console.log(`hello ${name} is live in ${address.city} and his email is ${email}`);

// const userList =[
//     {id:1,name:'bobo',age:22,gender:'male',address:'yangon',isStatus:true},
//     {id:2,name:'koko',age:23,gender:'male',address:'yangon',isStatus:true},
//     {id:3,name:'popo',age:18,gender:'female',address:'yangon',isStatus:false},
//     {id:4,name:'eiei',age:20,gender:'female',address:'yangon',isStatus:true},
//     {id:5,name:'nana',age:35,gender:'female',address:'yangon',isStatus:false},
//     {id:6,name:'maungmaung',age:34,gender:'male',address:'yangon',isStatus:true},
//     {id:7,name:'aung',age:23,gender:'male',address:'yangon',isStatus:false},
//     {id:8,name:'zuu',age:43,gender:'female',address:'yangon',isStatus:false},
//     {id:9,name:'thu',age:24,gender:'female',address:'yangon',isStatus:true},

// ]
// let toJson = JSON.stringify(userList);  //!array to json ပြောင်းခြင်း
// // console.log(toJson);
// let toarray = JSON.parse(toJson);
// console.log(toarray);

// const dice ={
//     sides : 6,
//     roll(count){
//         i=0;
//         let a = [];
//         let b = [];
//         while (i<count){
//             // dice start 1
//             let res = Math.floor(this.sides * (Math.random()))+1;
//             if (res <= 3){
//                 a.push(res)
//             }else{
//                 b.push(res)
//             }
//             i++;
//         }
//         console.log(`a win ${a.length}`);
//         console.log(`b win ${b.length}`);
//         if(a.length === b.length){
//             console.log('game is draw')
//         }else{
//             let w = (a.length > b.length) ?
//             'a winner' : 'b winner';
//             console.log(w);
//         }
//     }
// }
// dice.roll(100);

// let item = new Map();
// item.set('name','koko');
// item.set('name','bobo')
// item.set('name','kyaw kyaw')
// item.set('age',23);
// item.set('apple',29);
// console.log(item.has('apple'))
// item.set(['A'],59);
// console.log(item.size)
// console.log(item.get('name'));

// item.forEach((k,v)=>{
//     console.log(`key is ${k} , value is ${v}`)
// })
// let mySet = new Set([1,2,3,4,5,6,6,5,2,4,3,3,4,]);
// console.log(mySet);

// !"use strict";

// !  ternary operator
// let result = (a===b) ? true : false;

//! nullsich coalescing operator (??);

// let name;
// let user = name ?? 'john';

// let d = new Date().getDay();
// switch(d){
//     case  0:
//     console.log('Sun');
//     break;
//     case 1:
//         console.log('Mon');
//         break;
// }

// for (let i = 0; i<10000;i++){
//     if(i===3)continue;
//     if(i===10) break;
//     console.log('i is', i);
// }
// let users = ['john','james','smith','rose','hellen','nono'];
// for(let i=0;i<users.length;i++){
// console.log('users',users[0])
// console.log('i',users[i]);
//     let user = users[i];
//     if(user === 'smith')break;
//     console.log(user);
// }

const userList = [
  {
    id: 1,
    name: "bobo",
    age: 22,
    gender: "male",
    adddress: "yangon",
    isStatus: true,
    email:'bobo@gmail.com'
  },
  {
    id: 2,
    name: "nono",
    age: 32,
    gender: "female",
    adddress: "yangon",
    isStatus: true,
    email:'nono@gmail.com'
  },
  {
    id: 3,
    name: "popo",
    age: 20,
    gender: "female",
    adddress: "mdy",
    isStatus: false,
    email:'popo@gmail.com'
  },
  {
    id: 4,
    name: "james",
    age: 19,
    gender: "male",
    adddress: "mdy",
    isStatus: false,
    email:'james@gmail.com'
  },
  {
    id: 5,
    name: "momo",
    age: 16,
    gender: "female",
    adddress: "bago",
    isStatus: false,
    email:'momo@gmail.com'
  },
  {
    id: 6,
    name: "lana",
    age: 27,
    gender: "female",
    adddress: "bago",
    isStatus: false,
    email:'lana@gmail.com0'
  },
  {
    id: 7,
    name: "kiki",
    age: 35,
    gender: "female",
    adddress: "yangon",
    isStatus: true,
    email:'kiki@gmail.com'
  },
  {
    id: 8,
    name: "kohla",
    age: 33,
    gender: "male",
    adddress: "mdy",
    isStatus: true,
    email:'kohla@gmail.com'
  },
];
const user = {
  id: 1,
  name: "bobo",
  age: 22,
  gender: "male",
  adddress: "yangon",
  isStatus: true,
  email:'bobo@gmail.com'
};

// ! for in loop (for in ကို object တွေကို loop ပတ်ဖို့အတွက်သုံးတယ်)
// for (let person in user) {
//   console.log(person, user[person]); // person တစ်ခုပဲခေါ်မယ်ဆိုရင် properties တွေသာပြန်ပေးမယ်
// }
// ! for of(for of ကိုတော့ဆက်တိုက်ဖြစ်နေတဲ့နေရာတွေမှာသုံးတယ်)
// for (let users of userList) {
//   let { name, age, adddress } = users;
//   console.log(
//     `user name is ${name} user age is ${age} user address is ${adddress}`
//   );
// }
// ! for loop (for loop ကိုတော့ တိကျသေချာတဲ့ iteration number တွေမှာသုံးတယ််) // ဥပမာ i= 0 မဟုတ်ပဲ i= 2 or 3
// let numbers = ["mg mg", "koko", "kyaw", "zaw"];
// for (let i = 1; i < numbers.length; i++) {
//   let person = numbers[i];
//   console.log(person);
//}
// !filter & map & reduce
//filter method data တွေဆွဲထုတ်ချင်ရင်သုံးတယ်
// const isMale = (person) =>{
//   return person.gender === 'male';
// }
// const result = userList.filter(isMale);
// console.log(result);

// map method ကို arrayထဲမှာdata တွေထပ်တည့်ချင်ရင်သုံးတယ်  //react.js မှာပိုပြီးတွင်တွင်ကျယ်ကျယ်အသုံးပြုတယ်
// const addition = userList.map(useradd=>useradd.job='programmer');
// console.log(addition);
// console.log(userList);

//reduce method ကိုတော့ array ထဲက data တွေပေါင်းချင်ရင်သုံးတယ်
// const numberList =[100,200,300,400,500,600]
// const number = numberList.reduce((acc,item)=>acc + item,900);
// console.log('number :>> ', number);
// ** reduce ကိုသုံးရင်  parameter ၂ခုပေးရတယ်။ ရှေ့က parameter က accumulative လို့ခေါ်တဲ့ ရောက်တဲ့နေရာကိုပြတာ
//နောက်က parameter ကတော့ ဆက်သွားနေတဲ့ iterate number ကိုပြတာ နောက်ဆုံးက 900 ကတော့ ကိုယ်ပြချင်တဲ့ default ကိုပြပေးတာ

// ! function  များကိုလေ့လာခြင်း

// function person(name ="john",age=23){
//   let res = `My name is ${name},my age is ${age}`;
//   console.log(res)
//   document.write(res);

// }
// person('koko',34);
// person()
// person('maung');

// ** function recurtion
// function factorial(n){
//   if(n <= 1){
//     return 1;
//   }else{
//     return n ** factorial(n-1);
//   }
// };
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(4));
// const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
// console.log(fibonacci(10));
// 55

//** higher order function  ဆိုတာ argument ကနေ data ကိုပြန်ပြီးpassion ပြန်ပေးတာ
//**  function တစ်ခုကနေ တခြားfunction ကိုခေါ်တာ
let factorial =function(func,x){      //this is function expression
  return func(x);
}
function double(x){    //function declaration
  return x * 2;
}
console.log(factorial(double,2))


function applyFunction(func,item){
  return func(item);
}
function trouble(item){
  return item ** 2
}
console.log(applyFunction(trouble,3))

function greeting(greet){
  return function(name){
    console.log(`${greet},${name}`);
  }
}
const greate =greeting("hello");
console.log(greate('PyaeSone'))
// **higher-order function with map method
const numbers = [2,3,4,5,6,7];
const number = [2,4,6,8]
function divisionNumbes(num){
  return num % 2;
}
function divided(arr,divi){
  return arr.map(divi);
}
console.log(divided(number,divisionNumbes));
// ** higher-order function with filter method
let num = [10,11,12,13,14,15,16,17,18,19,20]
function filterFun(arr,item){
  return arr.filter(item);
}
let func = filterFun(num,(numb => numb%2 != 0));
console.log(func);

// ** higher-order function with for loop
function apply(arr,item){
  let result = [];
  for(let i=0;i < arr.length; i++){
    result.push(item(arr[i]))
  }
  return result;
}
const numb = [1,2,3,4,5,6,7];
const addition = (num) =>{
  return num ** 3;
}

console.log(apply(numb,addition))

// **closures function
// ** closures function ဆိုတာက function scope  ထဲက function တစ်ခုကို parent functionမှာပြန်ခေါ်သုံးခြင်း
function parentFun (outerFun){
  return function childrenFun (innerFun){
    console.log(outerFun + innerFun);
  }
}
console.log(parentFun('Hello')('World'));

function createCounter (){
  let count = 0;
 return{
  increat: function(){
    count ++;
    console.log(count);
  },
  decreat: function(){
    count --;
    console.log(count);
  },
  getCount: function(){
    console.log(count);
  }
 }
}
let counter = createCounter()
counter.increat()
counter.increat()
counter.increat()
counter.decreat()


const employee = [
  {id:1,name:'bobo',sallery:900000,department:"IT",DOB:"01/30/1990"},
  {id:2,name:'mgmg',sallery:850000,department:"Account",DOB:"10/15/1992"},
  {id:3,name:'nono',sallery:700000,department:"Finance",DOB:"02/7/2000"},
  {id:4,name:'popo',sallery:700000,department:"IT",DOB:"04/9/2001"},
  {id:5,name:'koko',sallery:850000,department:"Finance",DOB:"09/25/1991"},
  {id:6,name:'aungaung',sallery:880000,department:"Finance",DOB:"09/25/1981"},
  {id:7,name:'rose',sallery:880000,department:"Account",DOB:"09/25/1995"},
  {id:8,name:'deny',sallery:980000,department:"IT",DOB:"09/25/1993"},
  {id:9,name:'jolly',sallery:800000,department:"Account",DOB:"09/25/1999"},
]
