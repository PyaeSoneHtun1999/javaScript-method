const employees = [
    {id:1,name:'bobo',sallery:900000,department:"IT",DOB:"01/30/1990"},
    {id:2,name:'mgmg',sallery:850000,department:"Account",DOB:"10/15/1992"},
    {id:3,name:'nono',sallery:700000,department:"Finance",DOB:"02/7/2000"},
    {id:4,name:'popo',sallery:700000,department:"IT",DOB:"04/9/2001"},
    {id:5,name:'koko',sallery:850000,department:"Finance",DOB:"09/25/1991"},
    {id:6,name:'aungaung',sallery:880000,department:"Finance",DOB:"09/25/1981"},
    {id:7,name:'rose',sallery:880000,department:"Account",DOB:"09/25/1979"},
    {id:8,name:'deny',sallery:980000,department:"IT",DOB:"09/25/1993"},
    {id:9,name:'jolly',sallery:800000,department:"Account",DOB:"09/25/1999"},
]
//filter နဲ့ employees ထဲက လူတွေရဲ့အသက်ကိုစစ်ခြင်း
let over30 = employees.filter(user=>new Date().getFullYear() - new Date(user.DOB).getFullYear() >30);
console.log('over30 :>> ', over30);

// sort စီခြင်း
let sortsee = employees.sort((a,b)=>new Date(a.DOB).getFullYear() - new Date(b.DOB).getFullYear());
console.log('sortsee :>> ', sortsee);

let seesort = employees.sort((b,a)=>new Date(b.DOB).getFullYear() - new Date(a.DOB).getFullYear());
console.log('seesort :>> ', seesort);
// map method ကိုသုံးပြီး စစ်ခြင်း
const employDatails = employees.map((user)=>{
    return `${user.name} works in the ${user.department} since ${user.DOB} and his sallary is ${user.sallery /1000}k.`;
})
console.log('employDatails :>> ', employDatails);
// department ထဲမှာ လူဘယ်နယောက်ရှိလဲစစ်ခြင်း
const result = employees.reduce((acc,user)=>({...acc,[user.department]:acc[user.department] +1 || 1}),{});
console.log('result :>> ', result);
//employees ထဲက လူအားလုံးပေါင်းရဲ့လစာကိုစစ်ခြင်း
let total = employees.reduce((acc,user)=>acc + parseInt(user.sallery),0);
console.log('total :>> ', total);
let total2 = employees.reduce((acc,{sallery})=>acc + parseInt(sallery),0);
console.log('total2 :>> ', total2);
let averageSallery= employees.reduce((acc,{sallery})=>acc+parseInt(sallery),0) / employees.length;
console.log('averageSallery :>> ', averageSallery);

// department ထဲက လူအရေတွက်ကို နာမည်နဲ့ စစ်ခြင်း
const nameGroup = employees.reduce((acc,user)=>{
    const key = user.department;
    const existValue = acc[key] || [];
    return {...acc,[key] : [...existValue,user.name]}
},{});
console.log('nameGroup :>> ', nameGroup);
// highest sallery ကို စစ်ခြင်း
const highest = employees.reduce((highest,employee)=>{
    return employee.sallery > highest.sallery ? employee : highest;
});
console.log('highest :>> ', highest);

// array ထဲက အသက်အကြီးဆုံးလူကို ရှာခြင်း
const calculateAge = dob =>{
    const dobDate = new Date(dob);
    const diffMs = Date.now() - dobDate.getTime();
    const ageDate = new Date(diffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
};
let myBirthday = '04/29/1999';
console.log('calculateAge(myBirthday) :>> ', calculateAge(myBirthday));
// calculateAge ကိုအခြေခံပြီး ကိုယ့်ရဲ့ အသက်ကိုထုတ်ကြည့်ခြင်း
const oldestEmployee = employees.reduce((oldest,user)=>{
    const employeeAge = calculateAge(user.DOB);
    return employeeAge > calculateAge(oldest.DOB) ? user : oldest;
});
console.log('oldestEmployee :>> ', oldestEmployee);
// new function Date()fomat
let date = "29/04/1999";
console.log(new Date(date)); // invalid Date
let [day,month,year]=date.split('/'); // date များကို split ဖြင့်ပိုင်ခြားခြင်း
let formatDate = `${year}/${month}/${day}`;
console.log('formatDate :>> ', formatDate);

const comments = {
    100:{text:"this is good 33",userId:1},
    201:{text:"this is nice ff",userId:2},
    3012:{text:"this is nice dd",userId:2},
    320:{text:"this is nice dddd",userId:1},
    100:{text:"this is nice asdf",userId:2},
    435:{text:"this is fffds goo 33",userId:3},
    111:{text:"this is ddddsf ba 33",userId:4},
    200:{text:"this is ddd ba 33",userId:4},
    120:{text:"this is dddsdf ba 33",userId:5},
    301:{text:"this is sddsgood",userId:6},
    130:{text:"this isdsfds bad",userId:3},
};
// reduce သုံးပြီး key တို့ value တို့ကို ရှာခြင်း
console.log(Object.keys(comments));
console.log(Object.values(comments));
// usercomments ရဲ့ key ထဲကို value ထည့်ခြင်း (ပထမနည်းလမ်း)
const userComments = Object.values(comments).reduce((acc,user)=>{
    const key = user.userId;
    if(!acc[key]){
        acc[key] = [];
    }
    acc[key].push(user.text);
    return acc;
},{})
console.log(userComments);
// usercomments ရဲ့ key ထဲကို values ထည့်ခြင်း (ဒုတိယနည်း)
const allComment = Object.values(comments).reduce((acc,user)=>{
    const key = user.userId;
    const value = acc[key] || [];
    return {...acc, [key] : [...value,user.text]}
},{});
console.log('allComment :>> ', allComment);

// စာအုပ်ဆိုင်တစ်ခုမှ စာအုပ်ငှားခြင်း
function book(title,auther){
    this.title = title;
    this.auther = auther;
    this.getBookInfo = function(){
        return `title is ${this.title} and auther is ${this.auther}`
    };
}
let book1 =new book('book1','nono');
let book2 =new book('book2','popo');
let book3 =new book('book3','aungaung');
let book4 =new book('book4','koko');

const library =new Map();
library.set(book1,true);
library.set(book2,false);
library.set(book3,false);
library.set(book4,true);
// စာအုပ်ငှားမယ်
function checkoutBook(book){
    if(library.has(book)  && library.get(book)){
        library.set(book,false);
        console.log(`book ${book.title} checkout success`)
    }else{
        console.log(`book ${book.title} is not available`);
    }
}
// စာအုပ်ကို ပြန်အပ်ခြင်း
function returnBook(book){
    if(library.has(book) &&! library.get(book)){
        library.set(book,true);
        console.log(`book ${book.title} return success`);
    }else{
        console.log(`book ${book.title} is already available`);
    }
}

function isAvailable(book){
    if(library.has(book)){
        return library.get(book);
    }else{
        return 'not found';
    }
}


checkoutBook(book1);
checkoutBook(book2);
returnBook(book1)
console.log(isAvailable(book1));
console.log(isAvailable(book2));
console.log(isAvailable(book3));

//todo list ပုံစံ test များတည်ဆောက်ခြင်း
function tesk(id,description){
    this.id = id;
    this.description =description;
    this.status = 'pending';
    this.complete =function(){
        this.status = 'complete';
    };
    this.newDescription = function(){
        this.description = 'New Description';
    }
};
let tesk1 =new tesk(1,'to eat');
let tesk2 =new tesk(2,'to walk');
let tesk3 =new tesk(3,'to code');
let tesk4 =new tesk(4,'to lunch');
let tesk5 =new tesk(5,'to go back home');
let tesk6 =new tesk(6,'to learn');
let tesk7 =new tesk(7,'to talk about future');
let tesk8 =new tesk(8,'to sleep');

let tesksAll = new Map();
tesksAll.set(tesk1,true);
tesksAll.set(tesk2,false);
tesksAll.set(tesk3,false);
tesksAll.set(tesk4,true);
tesksAll.set(tesk5,false);
tesksAll.set(tesk6,true);
tesksAll.set(tesk7,false);
tesksAll.set(tesk8,true);
// test တစ်ခုကိုအပ်ခြင်း
function addTesk(test){
    if(!tesksAll.has(test)){
        tesksAll.set(test,true);
        console.log(`id:${test.id}=> ${test.description} is added success`);
    }else{
        console.log(`${test.id} already exist`);
    }
};
let tesk9 =new tesk(9,'to look movie');
let tesk10 =new tesk(10,'to listen news');

addTesk(tesk9);

// ပြီးသွားတဲ့ tesk ကို သိမ်းခြင်း
function completeTesk(test){
    if(tesksAll.has(test)){
        tesksAll.set(test,true);
        test.complete();
        console.log(`tesk ${test.id} completed successful`);
    }else{
        console.log(`tesk ${test.id} is not complete`);
    }
};
completeTesk(tesk1);
completeTesk(tesk2);
// လုပ်ပြီးပြီလား ဆိုတာသိချင်လို့စစ်တာ
function isTeskComplete(test){
    if(tesksAll.has(test)){
        return tesksAll.get(test);
    }
    return false;
};
console.log('isTeskComplete(tesk3) :>> ', isTeskComplete(tesk3));
console.log('isTeskComplete(tesk4) :>> ', isTeskComplete(tesk4));
console.log('tesksAll :>> ', tesksAll);

const numbers = [1,1,2,2,3,3,4,4,5];
const uniqueNumbers = Array.from(new Set(numbers));
console.log('uniqueNumbers :>> ', uniqueNumbers);

const setA = [1,2,3];
const setB = [3,4,5];
//union
const union = new Set([...setA,...setB]);
console.log('union :>> ', union);

//intersection (find same value)
const intersection = new Set([...setA].filter((x)=>{return setB.has(x)}));
console.log('intersection :>> ', intersection);