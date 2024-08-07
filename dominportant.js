let countries = ['USA','ENGLAND','MYANMAR','THAILAND','LAOS','SINGAPORE']
const select = document.querySelector('select');
countries.forEach(country=>{
    let option = document.createElement('option');
    option.value = country;
    option.innerText =country;
    select.append(option);
});
select.onchange= function(){
    alert(`You selected the ${this.value}`)
}