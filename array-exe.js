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