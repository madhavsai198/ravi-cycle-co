// ==========================================
// RAVI CYCLE COMPANY — Product Detail Page
// ==========================================

import { initCommon, renderProductCard, formatPrice, renderStars, initScrollReveal } from './components.js';
import { products } from './data.js';
import { initChatbot } from './chatbot.js';

let currentProduct = null;
let selectedColor = 0;
let selectedSize = 0;
let selectedGear = 0;

document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  initChatbot();
  
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  currentProduct = products.find(p => p.id === productId);

  if (!currentProduct) {
    currentProduct = products[0]; // fallback
  }

  document.title = `${currentProduct.name} — Ravi Cycle Company`;
  document.getElementById('breadcrumb-product').textContent = currentProduct.name;
  
  renderProductDetail();
  renderRelatedProducts();
});

function renderProductDetail() {
  const container = document.getElementById('product-detail');
  if (!container || !currentProduct) return;

  const discount = Math.round(((currentProduct.mrp - currentProduct.price) / currentProduct.mrp) * 100);
  const product = currentProduct;

  container.innerHTML = `
    <!-- Gallery -->
    <div class="product-gallery">
      <div class="product-main-image" id="main-image">
        <span class="discount-badge">${discount}% OFF</span>
        <img src="${product.image}" alt="${product.name}" id="main-product-img">
      </div>
      <div class="product-thumbnails">
        ${product.images.map((img, i) => `
          <div class="product-thumbnail ${i === 0 ? 'active' : ''}" data-index="${i}">
            <img src="${img}" alt="${product.name} view ${i + 1}">
          </div>
        `).join('')}
        <div class="product-thumbnail" style="background: linear-gradient(135deg, #f0f0f0, #e0e0e0); display: flex; align-items: center; justify-content: center; color: #999; font-size: 12px;">
          +360°
        </div>
      </div>
    </div>

    <!-- Info -->
    <div class="product-info">
      <div class="product-title-section">
        <h1>${product.name}</h1>
        <div class="product-rating-row">
          <div class="stars">${renderStars(product.rating)}</div>
          <span class="review-count">${product.rating}/5 · ${product.reviews} reviews</span>
        </div>
      </div>

      <!-- EMI Banner -->
      <div class="emi-banner">
        <div class="emi-info">
          <span class="new-badge">NEW</span>
          <span><strong>₹${formatPrice(product.emi)}/month</strong> · 3/6/9 months EMI options</span>
          <br>
          <span style="font-size: 11px; color: #999;">0% EMI on UPI via Ravi Cycles Pay Later</span>
        </div>
        <div class="emi-price-tag">
          <a href="#" class="btn btn-accent btn-sm">BUY ON EMI</a>
          <div class="price" style="margin-top: 4px;">₹${formatPrice(product.price)}</div>
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
          <span class="sku-display">${product.sku}</span>
        </div>

        <!-- Size -->
        <div class="option-group">
          <label>SIZE</label>
          <div class="size-options">
            ${product.sizes.map((size, i) => `
              <button class="size-btn ${i === 0 ? 'active' : ''}" data-index="${i}">${size}</button>
            `).join('')}
          </div>
        </div>

        <!-- Color -->
        <div class="option-group">
          <label>COLOR: <strong id="selected-color-name">${product.colors[0]?.name || ''}</strong></label>
          <div class="detail-color-options">
            ${product.colors.map((color, i) => `
              <div class="detail-color-swatch ${i === 0 ? 'active' : ''}" 
                   style="background: ${color.hex}" 
                   data-index="${i}" 
                   data-name="${color.name}"
                   title="${color.name}"></div>
            `).join('')}
          </div>
        </div>

        <!-- Gear Speed -->
        ${product.gears.length > 0 ? `
        <div class="option-group">
          <label>GEAR SPEED</label>
          <div class="option-buttons">
            ${product.gears.map((gear, i) => `
              <button class="option-btn ${i === 0 ? 'active' : ''}" data-type="gear" data-index="${i}">${gear}</button>
            `).join('')}
          </div>
        </div>
        ` : ''}

        <!-- Brake Type -->
        ${product.brakeType.length > 0 ? `
        <div class="option-group">
          <label>BRAKE</label>
          <div class="option-buttons">
            ${product.brakeType.map((brake, i) => `
              <button class="option-btn ${i === 0 ? 'active' : ''}" data-type="brake" data-index="${i}">${brake}</button>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </div>

      <!-- Price -->
      <div class="product-price-section">
        <div class="product-price-row">
          <span class="product-mrp">₹${formatPrice(product.mrp)} INR</span>
          <span class="product-price">Rs. ${formatPrice(product.price)} INR</span>
          <span class="product-discount">${discount}% OFF</span>
        </div>
        <span class="product-tax">(Inclusive of all taxes)</span>
        <div class="emi-tag">
          or <strong>₹${formatPrice(product.emi)}/Month</strong>
          <span class="emi-btn">Buy on EMI →</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="product-actions">
        <button class="btn btn-dark btn-lg" onclick="addToCart(${product.id})">🛒 ADD TO CART</button>
        <button class="btn btn-primary btn-lg">⚡ BUY NOW</button>
      </div>

      <!-- Specs Table -->
      <div id="tab-content">
        <table class="specs-table">
          ${Object.entries(product.fullSpecs).map(([key, value]) => `
            <tr>
              <td>${key}</td>
              <td>${value}</td>
            </tr>
          `).join('')}
        </table>
      </div>

      <!-- Description -->
      <div style="margin-top: var(--space-8); padding: var(--space-6); background: var(--color-gray-50); border-radius: var(--radius-lg);">
        <h4 style="margin-bottom: var(--space-3);">About this Cycle</h4>
        <p style="color: var(--color-gray-600); line-height: 1.7; font-size: var(--fs-sm);">${product.description}</p>
      </div>
    </div>
  `;

  // Init interactions
  initSizeSelector();
  initColorSelector();
  initOptionButtons();
  initTabs();
  initThumbnails();
}

function initSizeSelector() {
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = parseInt(btn.dataset.index);
    });
  });
}

function initColorSelector() {
  document.querySelectorAll('.detail-color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.detail-color-swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      selectedColor = parseInt(swatch.dataset.index);
      document.getElementById('selected-color-name').textContent = swatch.dataset.name;
    });
  });
}

function initOptionButtons() {
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      document.querySelectorAll(`.option-btn[data-type="${type}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function initTabs() {
  document.querySelectorAll('.product-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.product-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Tab content switching can be expanded
    });
  });
}

function initThumbnails() {
  document.querySelectorAll('.product-thumbnail').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const img = thumb.querySelector('img');
      if (img) {
        document.getElementById('main-product-img').src = img.src;
      }
    });
  });
}

function renderRelatedProducts() {
  const grid = document.getElementById('related-grid');
  if (!grid || !currentProduct) return;

  const related = products
    .filter(p => p.id !== currentProduct.id)
    .filter(p => p.category === currentProduct.category || Math.random() > 0.5)
    .slice(0, 4);

  grid.innerHTML = related.map(p => renderProductCard(p)).join('');
  initScrollReveal();
}
