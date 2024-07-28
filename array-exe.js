const employees = [
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