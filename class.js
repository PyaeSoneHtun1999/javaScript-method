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

let email = "Koko@gmail.com";
let paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ducimus?";
console.log("=>>" ,paragraph.split(" "));  // * * splitဆိုတာ string ကို aray ပြောင်းခြင်း 
let paragraphLorem =  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, ducimus?";
console.log(Lorem = paragraphLorem.split(","));
console.log(Lorem[2]);
const url = "http://127.0.0.1:5500/class.html";
console.log('url :>> ', url.split("."));
const a = email.slice(1,6); // **slice ဆိုတာ ကိုဖျက်ချင်တဲ့အပိုင်းကို ဖျက်မယ် ရှေ့ကစဖျက်ချင်တာ နောက်က ဆုံးချင်တဲ့နေရာ (start,end)
console.log(a);
const b = url.substring(2,5);
console.log(url.length)
console.log('url :>> ', url.substring(2,10)); // ** string ကလည်းဖျက်တာ (start,end)
console.log('url :>> ', url.substr(0,16)); // ** substr ကလည်းဖျက်တာ (start,length)
console.log('email :>> ', email.includes('g')); // ** includes method က ပါလားမပါလားစစ်တာ သူက boolean နဲ့ output ပြန်ထုတ်ပေးတယ်
console.log('email :>> ', email.replace('Koko',"MaungMaung")); // ** ကိုယ်ဖယ်ချင်တဲ့နေရာမှာ နောက်တစ်ခုနဲ့အစားထိုးခြင်
console.log('email :>> ', email.includes('e')); 
let number = 230.3343434;
console.log(number.toFixed(2));


