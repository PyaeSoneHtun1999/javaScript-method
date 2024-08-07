
function lightTheme(){
    document.bgColor = '#ccc';
    head.style.color = '#222';
    para.style.color = '#222';
};
function darkTheme(){
    document.bgColor = '#222';
    head.style.color = '#ccc';
    para.style.color = '#ccc';
}
// ! method 2
// light.addEventListener("click",lightTheme);
// dark.addEventListener("click",darkTheme);

// ! method 3
// light.onclick =lightTheme;
// dark.onclick =darkTheme;
// const bot = document.querySelectorAll('button');
// bot.forEach(element=>{
//     element.onclick = function(){
//         document.bgColor = this.textContent;
//     }
// })
// ! DOM tree ကိုဆွေမျိုးစပ်ခြင်း
// let subClass = document.querySelector('.subclass');
// subClass.style.backgroundColor = 'skyBlue';
// console.log(subClass);
// console.log(subClass.parentElement);
// console.log(subClass.parentElement.parentElement);
// console.log(subClass.childElementCount);
// console.log('subClass.childElementCount :>> ', subClass.childElementCount);
// console.log(subClass.previousElementSibling)
// console.log(subClass.previousSibling)
// console.log(subClass.previousElementSibling.previousElementSibling)
// console.log(subClass.nextElementSibling);
// console.log(subClass.nextElementSibling.nextElementSibling.nextElementSibling)

// const clickBut = document.getElementById('click');
// ! H1 ကို color ပြောင်းခြင်း
// let clickFun = () =>{
//     subClass.previousElementSibling.style.backgroundColor = 'lightgreen';
// }
// clickBut.addEventListener('click',clickFun)
// let h1Element = document.getElementsByTagName('h1')[0];
// let buttonEle = document.querySelector('button');
// let h1Ele = () =>{
//     h1Element.style.backgroundColor = 'red';
// }
// buttonEle.addEventListener('click',h1Ele) 
// ! article ကို hide and show ထားခြင်း
let btns = document.querySelectorAll('button');
let span = document.querySelector('span');
btns.forEach(btn=>{
    btn.onlick=function(){
        console.log(p.querySelector)
        this.previosElementSibling.children[0].classList.toggle('show')
        if(this.innerText ==='show'){
            this.innerText = 'hide';
        }else{
            this.innerText = 'show';
        }
    }
})