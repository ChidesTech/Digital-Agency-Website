// Select Element

const currentLocale = location.href;
const menuItem= document.querySelectorAll('a'); 
const menuLength = menuItem.length
for(let i = 0; i<menuLength; i++){
  if(menuItem[i].href === currentLocale){
    menuItem[i].className ="active"
  }
};



 const timer = setTimeout(()=>{
    document.getElementById("chat").style.visibility= "visible";

  }, 5500);
  ()=> clearTimeout(timer);

  const secondTimer = setTimeout(()=>{
    document.getElementById("chat").style.visibility= "hidden";

  }, 11500);
   ()=> clearTimeout(secondTimer);


const selectElement = (element)=>{
   return document.querySelector(element);}


const menuToggle = selectElement(".menu-toggle");
const body = selectElement("body");

menuToggle.addEventListener("click", ()=>{
  body.classList.toggle("open")
});

window.sr = ScrollReveal();

sr.reveal(".animate-left",{
   origin: "left",
   duration:1000,
   distance:"25rem",
   delay: 300
})
sr.reveal(".animate-right",{
   origin: "right",
   duration:1000,
   distance:"25rem",
   delay: 600
})
sr.reveal(".animate-top",{
   origin: "top",
   duration:1000,
   distance:"25rem",
   delay: 600
})
sr.reveal(".animate-bottom",{
   origin: "bottom",
   duration:1000,
   distance:"25rem",
   delay: 600
})


// ACTIVE CLASS




