import{a as e}from"./data-CISQquEW.js";import"./footer-HvQ3RPj_.js";/* empty css             */import{a as t,i as n,n as r,o as i,r as a,t as o}from"./chatbot-noqMi_nh.js";var s=null;document.addEventListener(`DOMContentLoaded`,()=>{a(),o();let t=new URLSearchParams(window.location.search),n=parseInt(t.get(`id`));s=e.find(e=>e.id===n),s||=e[0],document.title=`${s.name} — Ravi Cycle Company`,document.getElementById(`breadcrumb-product`).textContent=s.name,c(),m()});function c(){let e=document.getElementById(`product-detail`);if(!e||!s)return;let t=Math.round((s.mrp-s.price)/s.mrp*100),n=s;e.innerHTML=`
    <!-- Gallery -->
    <div class="product-gallery">
      <div class="product-main-image" id="main-image">
        <span class="discount-badge">${t}% OFF</span>
        <img src="${n.image}" alt="${n.name}" id="main-product-img">
      </div>
      <div class="product-thumbnails">
        ${n.images.map((e,t)=>`
          <div class="product-thumbnail ${t===0?`active`:``}" data-index="${t}">
            <img src="${e}" alt="${n.name} view ${t+1}">
          </div>
        `).join(``)}
        <div class="product-thumbnail" style="background: linear-gradient(135deg, #f0f0f0, #e0e0e0); display: flex; align-items: center; justify-content: center; color: #999; font-size: 12px;">
          +360°
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="product-info">
      <div class="product-title-section">
        <h1>${n.name}</h1>
        <div class="product-rating-row">
          <div class="stars">${i(n.rating)}</div>
          <span class="review-count">${n.rating}/5 · ${n.reviews} reviews</span>
        </div>
      </div>

      <!-- EMI Banner -->
      <div class="emi-banner">
        <div class="emi-info">
          <span class="new-badge">NEW</span>
          <span><strong>₹${r(n.emi)}/month</strong> · 3/6/9 months EMI options</span>
          <br>
          <span style="font-size: 11px; color: #999;">0% EMI on UPI via Ravi Cycles Pay Later</span>
        </div>
        <div class="emi-price-tag">
          <a href="#" class="btn btn-accent btn-sm">BUY ON EMI</a>
          <div class="price" style="margin-top: 4px;">₹${r(n.price)}</div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="product-tabs">
        <button class="product-tab active" data-tab="specs">SPECS</button>
        <button class="product-tab" data-tab="compare">COMPARE</button>
        <button class="product-tab" data-tab="value">VALUE STACK</button>
        <button class="product-tab" data-tab="reviews">REVIEWS</button>
        <a href="store-locator.html" class="find-store-link">📍 FIND NEAREST STORE</a>
      </div>

      <!-- Options -->
      <div class="product-options">
        <!-- SKU -->
        <div class="option-group">
          <label>SKU</label>
          <span class="sku-display">${n.sku}</span>
        </div>

        <!-- Size -->
        <div class="option-group">
          <label>SIZE</label>
          <div class="size-options">
            ${n.sizes.map((e,t)=>`
              <button class="size-btn ${t===0?`active`:``}" data-index="${t}">${e}</button>
            `).join(``)}
          </div>
        </div>

        <!-- Color -->
        <div class="option-group">
          <label>COLOR: <strong id="selected-color-name">${n.colors[0]?.name||``}</strong></label>
          <div class="detail-color-options">
            ${n.colors.map((e,t)=>`
              <div class="detail-color-swatch ${t===0?`active`:``}" 
                   style="background: ${e.hex}" 
                   data-index="${t}" 
                   data-name="${e.name}"
                   title="${e.name}"></div>
            `).join(``)}
          </div>
        </div>

        <!-- Gear Speed -->
        ${n.gears.length>0?`
        <div class="option-group">
          <label>GEAR SPEED</label>
          <div class="option-buttons">
            ${n.gears.map((e,t)=>`
              <button class="option-btn ${t===0?`active`:``}" data-type="gear" data-index="${t}">${e}</button>
            `).join(``)}
          </div>
        </div>
        `:``}

        <!-- Brake Type -->
        ${n.brakeType.length>0?`
        <div class="option-group">
          <label>BRAKE</label>
          <div class="option-buttons">
            ${n.brakeType.map((e,t)=>`
              <button class="option-btn ${t===0?`active`:``}" data-type="brake" data-index="${t}">${e}</button>
            `).join(``)}
          </div>
        </div>
        `:``}
      </div>

      <!-- Price -->
      <div class="product-price-section">
        <div class="product-price-row">
          <span class="product-mrp">₹${r(n.mrp)} INR</span>
          <span class="product-price">Rs. ${r(n.price)} INR</span>
          <span class="product-discount">${t}% OFF</span>
        </div>
        <span class="product-tax">(Inclusive of all taxes)</span>
        <div class="emi-tag">
          or <strong>₹${r(n.emi)}/Month</strong>
          <span class="emi-btn">Buy on EMI →</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="product-actions">
        <button class="btn btn-dark btn-lg" onclick="addToCart(${n.id})">🛒 ADD TO CART</button>
        <button class="btn btn-primary btn-lg">⚡ BUY NOW</button>
      </div>

      <!-- Specs Table -->
      <div id="tab-content">
        <table class="specs-table">
          ${Object.entries(n.fullSpecs).map(([e,t])=>`
            <tr>
              <td>${e}</td>
              <td>${t}</td>
            </tr>
          `).join(``)}
        </table>
      </div>

      <!-- Description -->
      <div style="margin-top: var(--space-8); padding: var(--space-6); background: var(--color-gray-50); border-radius: var(--radius-lg);">
        <h4 style="margin-bottom: var(--space-3);">About this Cycle</h4>
        <p style="color: var(--color-gray-600); line-height: 1.7; font-size: var(--fs-sm);">${n.description}</p>
      </div>
    </div>
  `,l(),u(),d(),f(),p()}function l(){document.querySelectorAll(`.size-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.size-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),parseInt(e.dataset.index)})})}function u(){document.querySelectorAll(`.detail-color-swatch`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.detail-color-swatch`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),parseInt(e.dataset.index),document.getElementById(`selected-color-name`).textContent=e.dataset.name})})}function d(){document.querySelectorAll(`.option-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.type;document.querySelectorAll(`.option-btn[data-type="${t}"]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)})})}function f(){document.querySelectorAll(`.product-tab`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.product-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)})})}function p(){document.querySelectorAll(`.product-thumbnail`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.product-thumbnail`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.querySelector(`img`);t&&(document.getElementById(`main-product-img`).src=t.src)})})}function m(){let r=document.getElementById(`related-grid`);!r||!s||(r.innerHTML=e.filter(e=>e.id!==s.id).filter(e=>e.category===s.category||Math.random()>.5).slice(0,4).map(e=>t(e)).join(``),n())}