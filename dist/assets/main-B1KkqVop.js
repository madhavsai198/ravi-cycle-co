import{a as e,n as t,s as n,t as r}from"./data-CISQquEW.js";import"./footer-HvQ3RPj_.js";/* empty css             */import{a as i,r as a,t as o}from"./chatbot-noqMi_nh.js";document.addEventListener(`DOMContentLoaded`,()=>{s(),c(),l(),u(),d(),a(),o(),f()});function s(){let t=document.getElementById(`featured-grid`);if(!t)return;let n=e.filter(e=>e.badges.includes(`Best Seller`)).slice(0,4);n.length===0?t.innerHTML=e.slice(0,4).map(e=>i(e)).join(``):t.innerHTML=n.map(e=>i(e)).join(``)}function c(){let e=document.getElementById(`categories-grid`);e&&(e.innerHTML=t.map((e,t)=>`
    <a href="products.html?category=${e.name}" class="category-card reveal" style="animation-delay: ${t*.1}s">
      <div class="category-card-bg" style="background-color: var(--color-gray-50); background-image: url('${e.image}'); background-size: contain; background-repeat: no-repeat; background-position: center top 20px;"></div>
      <div class="category-card-content">
        <div class="category-card-icon">${e.icon}</div>
        <h3>${e.name}</h3>
        <p>${e.count} Products</p>
      </div>
      <div class="explore-arrow">→</div>
    </a>
  `).join(``))}function l(){let e=document.getElementById(`budget-grid`);e&&(e.innerHTML=r.map((e,t)=>`
    <a href="products.html?maxPrice=${e.max}" class="budget-card reveal" style="animation-delay: ${t*.1}s">
      <div class="budget-card-image">
        <img src="${e.image}" alt="${e.label}">
      </div>
      <h4>${e.label}</h4>
      <span style="font-size: var(--fs-xs); color: var(--color-primary); font-weight: var(--fw-bold); margin-top: var(--space-2); display: inline-block;">Shop Now →</span>
    </a>
  `).join(``))}function u(){let e=document.getElementById(`testimonials-grid`);e&&(e.innerHTML=n.map((e,t)=>`
    <div class="testimonial-card reveal" style="animation-delay: ${t*.15}s">
      <div class="testimonial-quote">${e.quote}</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${e.initial}</div>
        <div class="testimonial-info">
          <h5>${e.author}</h5>
          <p>${e.location}</p>
        </div>
        <div class="stars" style="margin-left: auto;">★★★★★</div>
      </div>
    </div>
  `).join(``))}function d(){let e=document.getElementById(`hero-particles`);if(e)for(let t=0;t<20;t++){let t=document.createElement(`div`);t.className=`hero-particle`,t.style.left=Math.random()*100+`%`,t.style.top=Math.random()*100+`%`,t.style.animationDelay=Math.random()*5+`s`,t.style.animationDuration=5+Math.random()*5+`s`,e.appendChild(t)}}function f(){let e=document.getElementById(`newsletter-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=e.querySelector(`input`);n.value&&=(alert(`Thank you for subscribing! 🎉`),``)})}