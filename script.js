const items=document.querySelectorAll('.hero-copy,.about-grid,.title-row,.gallery figure,.manifesto blockquote,.booking,.contact-grid');
items.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=Math.min(i*.05,.3)+'s'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.1});
items.forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
const menu=document.querySelector('.hamburger'); const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});
