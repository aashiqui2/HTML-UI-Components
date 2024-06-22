const showPopupBtn=document.querySelector(".login-btn");
const hidePopupBtn=document.querySelector(".form-popup .close-btn");
const loginSignuplink=document.querySelectorAll(".form-box .bottom-link a");
const formpopup=document.querySelector(".form-popup");

const menubtn=document.querySelector(".menu-btn");

const navbarmenu=document.querySelector(".navbar .links");
const hidementbtn=navbarmenu.querySelector(".close-btn");


menubtn.addEventListener("click",()=>{
navbarmenu.classList.toggle("show-menu");
});
hidementbtn.addEventListener("click",()=>menubtn.click())

showPopupBtn.addEventListener("click",()=>{
    document.body.classList.toggle("show-popup");
})

hidePopupBtn.addEventListener("click",()=>{ showPopupBtn.click() });

loginSignuplink.forEach(link=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log(link.id);
        formpopup.classList[link.id==="signup-link" ? 'add':'remove']("show-signup");
    })

})