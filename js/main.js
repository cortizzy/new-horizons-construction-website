(() => {"use strict";
const toggle=document.getElementById("menuToggle"),nav=document.getElementById("primaryNav");
function closeMenu(){toggle?.setAttribute("aria-expanded","false");nav?.classList.remove("is-open")}
toggle?.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(open));nav?.classList.toggle("is-open",open)});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu()});
const year=document.getElementById("currentYear");if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById("contactForm");form?.addEventListener("submit",e=>{e.preventEvent?.();e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form),subject=encodeURIComponent(`New Horizons inquiry: ${d.get("type")}`),body=encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nInquiry: ${d.get("type")}\n\nDetails:\n${d.get("details")}`);const status=document.getElementById("formStatus");if(status)status.textContent="Opening your email application…";location.href=`mailto:info@newhorizonsconstructions.com?subject=${subject}&body=${body}`});
})();
