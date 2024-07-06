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
//     // console.log('users',users[0])
//     // console.log('i',users[i]);
//     let user = users[i];
//     if(user === 'smith')break;
//     console.log(user);
// }

const userList = [
    {id:1,name:'bobo',age:22,gender:'male',adddress:"yangon",isStatus:true},
    {id:2,name:'nono',age:32,gender:'female',adddress:"yangon",isStatus:true},
    {id:3,name:'popo',age:20,gender:'female',adddress:"mdy",isStatus:false},
    {id:4,name:'james',age:19,gender:'male',adddress:"mdy",isStatus:false},
    {id:5,name:'momo',age:16,gender:'female',adddress:"bago",isStatus:false},
    {id:6,name:'lana',age:27,gender:'female',adddress:"bago",isStatus:false},
    {id:7,name:'kiki',age:35,gender:'female',adddress:"yangon",isStatus:true},
    {id:8,name:'kohla',age:33,gender:'male',adddress:"mdy",isStatus:true},
]
const user = {id:1,name:'bobo',age:22,gender:'male',adddress:"yangon",isStatus:true};

// ! for in loop (for in ကို object တွေကို loop ပတ်ဖို့အတွက်သုံးတယ်)
for (let person in user){
    console.log(person,user[person]); // person တစ်ခုပဲခေါ်မယ်ဆိုရင် properties တွေသာပြန်ပေးမယ် 
}
// ! for of(for of ကိုတော့ဆက်တိုက်ဖြစ်နေတဲ့နေရာတွေမှာသုံးတယ်)
for (let users of userList){
    let {name,age,adddress} = users;
    console.log(`user name is ${name} user age is ${age} user address is ${adddress}`);
}
// ! for loop (for loop ကိုတော့ တိကျသေချာတဲ့ iteration number တွေမှာသုံးတယ််) // ဥပမာ i= 0 မဟုတ်ပဲ i= 2 or 3
let numbers = ['mg mg','koko','kyaw','zaw'];
for(let i=1;i<numbers.length;i++){
    let person = numbers[i];
    console.log(person);
}