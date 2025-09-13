document.addEventListener("DOMContentLoaded",()=>{
  const menuBtn=document.querySelector(".menu-btn");
  const nav=document.querySelector(".nav");
  menuBtn.addEventListener("click",()=>{
    nav.style.display = nav.style.display==="flex" ? "none":"flex";
  });
});