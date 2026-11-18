const navbar=document.getElementById("navbar");
const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

window.addEventListener("scroll",()=>{
  navbar.classList.toggle("scrolled",window.scrollY>30);
});

menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click",()=>navLinks.classList.remove("open"));
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.15});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const area=document.getElementById("area").value.trim();
  const message=document.getElementById("message").value.trim();
  const text=`مرحباً، أرغب في طلب خدمة نقل عفش من النور للنقل.\nالاسم: ${name}\nالجوال: ${phone}\nالحي: ${area}\nالتفاصيل: ${message}`;
  window.open("https://wa.me/966551487459?text="+encodeURIComponent(text),"_blank");
});