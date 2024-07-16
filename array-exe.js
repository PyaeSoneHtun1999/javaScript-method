const employees = [
    {id:1,name:'bobo',sallery:900000,department:"IT",DOB:"01/30/1990"},
    {id:2,name:'mgmg',sallery:850000,department:"Account",DOB:"10/15/1992"},
    {id:3,name:'nono',sallery:700000,department:"Finance",DOB:"02/7/2000"},
    {id:4,name:'popo',sallery:700000,department:"IT",DOB:"04/9/2001"},
    {id:5,name:'koko',sallery:850000,department:"Finance",DOB:"09/25/1991"},
    {id:6,name:'aungaung',sallery:880000,department:"Finance",DOB:"09/25/1981"},
    {id:7,name:'rose',sallery:880000,department:"Account",DOB:"09/25/1995"},
    {id:8,name:'deny',sallery:980000,department:"IT Dept:",DOB:"09/25/1993"},
    {id:9,name:'jolly',sallery:800000,department:"Account",DOB:"09/25/1999"},

]
// const overThirty = employees.filter(user=>new Date().getFullYear()-new Date(user.DOB).getFullYear()>30)
// console.log(overThirty);
// const under30 =employees.sort((a,b)=>new Date(a.DOB).getFullYear() - new Date(b.DOB).getFullYear() < 30)
// console.log(under30);
// const emplpyeeDetails = employees.map(employee=>{
//     return `${name} works in the ${department} departments and earns ${sallery / 1000}k per year`
// });
// console.log(emplpyeeDetails);
let averageSallery = employees.reduce((acc,{sallery})=>acc+perseInt(sallery),0) / employees.length
console.log('averageSallery :>> ', averageSallery);

const acc = {b:2,c:3};
const result ={...acc,['a']:'a'}
console.log(result);
const acc2 = {b:2,c:3,a:100};
const result2 ={...acc,['a']:'apple'};
console.log('result2 :>> ', result2);

let res = employees.reduce((acc,employee)=>({...acc,[employee.department]:acc[employee.department]+1 || 1}))
console.log('res :>> ', res);

const nameGroup =employees.reduce((acc,user)=>{
    const key =user.department;
    const existValue = acc[key] || [];
    return {...acc,[key] : [...existValue,user.name]}
})