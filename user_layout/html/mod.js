let sec1=document.querySelector(".sec1");
let next1=document.querySelector(".next1");
let sec2=document.querySelector(".sec2");
let staa=document.querySelector(".sta-a");
let stac=document.querySelector(".sta-c");
let btnSta=document.querySelector("#btn-sta");
let log=document.querySelector("#loginForm");


log.addEventListener('input', ()=>{
if(staa.value.length > 0 && stac.checked){
    btnSta.removeAttribute('disabled');
}else{
    btnSta.setAttribute('disabled', 'disabled');
}
})