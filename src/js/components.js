// ==========================================
// RAVI CYCLE COMPANY — Shared Components
// ==========================================

// Determine active page
function getActivePage() {
  const path = window.location.pathname;
  if (path.includes('products.html')) return 'products';
  if (path.includes('product-detail.html')) return 'product-detail';
  if (path.includes('store-locator.html')) return 'store-locator';
  if (path.includes('about.html')) return 'about';
  if (path.includes('contact.html')) return 'contact';
  return 'home';
}

// Render Header
export function renderHeader() {
  const active = getActivePage();
  const header = document.getElementById('site-header');
  if (!header) return;

  header.innerHTML = `
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-left">
          <span>📞 +91 93939 34151</span>
          <span>📧 info@ravicycles.com</span>
        </div>
        <div class="top-bar-right">
          <span class="highlight">🚚 Free Delivery on Orders Above ₹5,000</span>
          <a href="store-locator.html">📍 Find a Store</a>
        </div>
      </div>
    </div>
    <nav class="main-nav">
      <div class="container">
        <a href="index.html" class="logo" id="logo">
          <img src="/images/logo.png" alt="Ravi Cycle Co" style="height: 70px; width: auto; object-fit: contain;">
        </a>

        <div class="nav-links">
          <a href="index.html" class="nav-link ${active === 'home' ? 'active' : ''}">Home</a>
          <div class="nav-dropdown">
            <a href="products.html" class="nav-link nav-dropdown-trigger ${active === 'products' ? 'active' : ''}">
              Cycles <span class="arrow">▼</span>
            </a>
            <div class="nav-dropdown-menu">
              <a href="products.html?category=Mountain"><span class="menu-icon">⛰️</span> Mountain Bikes</a>
              <a href="products.html?category=Road"><span class="menu-icon">🏁</span> Road Bikes</a>
              <a href="products.html?category=Hybrid"><span class="menu-icon">🚲</span> Hybrid Bikes</a>
              <a href="products.html?category=Kids"><span class="menu-icon">🧒</span> Kids Bikes</a>
              <a href="products.html?category=Electric"><span class="menu-icon">⚡</span> Electric Bikes</a>
            </div>
          </div>
          <a href="store-locator.html" class="nav-link ${active === 'store-locator' ? 'active' : ''}">Store Locator</a>
          <a href="about.html" class="nav-link ${active === 'about' ? 'active' : ''}">About</a>
          <a href="contact.html" class="nav-link ${active === 'contact' ? 'active' : ''}">Contact</a>
        </div>

        <div class="nav-search">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Search cycles, accessories..." id="nav-search-input">
        </div>

        <div class="nav-actions">
          <button class="nav-action-btn" id="wishlist-btn" title="Wishlist">♡</button>
          <button class="nav-action-btn" id="cart-btn" title="Cart">
            🛒
            <span class="badge-count">0</span>
          </button>
          <button class="nav-action-btn" id="user-btn" title="Account">👤</button>
        </div>

        <button class="mobile-menu-btn" id="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <div class="mobile-menu" id="mobile-menu">
      <a href="index.html" class="nav-link ${active === 'home' ? 'active' : ''}">Home</a>
      <a href="products.html" class="nav-link ${active === 'products' ? 'active' : ''}">All Cycles</a>
      <a href="products.html?category=Mountain" class="nav-link">Mountain Bikes</a>
      <a href="products.html?category=Road" class="nav-link">Road Bikes</a>
      <a href="products.html?category=Hybrid" class="nav-link">Hybrid Bikes</a>
      <a href="products.html?category=Kids" class="nav-link">Kids Bikes</a>
      <a href="products.html?category=Electric" class="nav-link">Electric Bikes</a>
      <a href="store-locator.html" class="nav-link ${active === 'store-locator' ? 'active' : ''}">Store Locator</a>
      <a href="about.html" class="nav-link ${active === 'about' ? 'active' : ''}">About</a>
      <a href="contact.html" class="nav-link ${active === 'contact' ? 'active' : ''}">Contact</a>
    </div>
  `;

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }

  // Sticky header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Search functionality
  const searchInput = document.getElementById('nav-search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        window.location.href = `products.html?search=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }
}

// Render Footer
export function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <img src="/images/logo.png" alt="Ravi Cycle Co" style="height: 70px; width: auto; object-fit: contain; filter: brightness(0) invert(1);">
          </a>
          <p>Your trusted cycling partner since 1995. We bring joy, fitness, and freedom on two wheels to families across India.</p>
          <div class="footer-social">
            <a href="#" title="Facebook">📘</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="YouTube">▶️</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">All Cycles</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="store-locator.html">Store Locator</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Categories</h4>
          <ul>
            <li><a href="products.html?category=Mountain">Mountain Bikes</a></li>
            <li><a href="products.html?category=Road">Road Bikes</a></li>
            <li><a href="products.html?category=Hybrid">Hybrid Bikes</a></li>
            <li><a href="products.html?category=Kids">Kids Bikes</a></li>
            <li><a href="products.html?category=Electric">Electric Bikes</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Warranty Policy</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Exchange</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>

        <div class="footer-col footer-newsletter-col">
          <h4>Newsletter</h4>
          <p class="footer-newsletter-text">Get the latest deals and cycling tips straight to your inbox.</p>
          <form class="newsletter-form" id="footer-newsletter">
            <input type="email" placeholder="Your email address" required>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Ravi Cycle Company. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
        <div class="payment-icons">
          <span>VISA</span>
          <span>MC</span>
          <span>UPI</span>
          <span>COD</span>
        </div>
      </div>
    </div>
  `;

  // Newsletter submit
  const newsletterForm = document.getElementById('footer-newsletter');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input.value) {
        alert('Thank you for subscribing! 🎉');
        input.value = '';
      }
    });
  }
}

// Scroll reveal animation
export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  // Failsafe: if no IntersectionObserver support, make all visible
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
  
  // Double failsafe: Force visible after a delay to prevent hidden content
  setTimeout(() => {
    reveals.forEach(el => {
      if (!el.classList.contains('visible')) {
        el.classList.add('visible');
      }
    });
  }, 2000);
}

// Format price in INR
export function formatPrice(price) {
  return new Intl.NumberFormat('en-IN').format(price);
}

// Generate star rating HTML
export function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < fullStars; i++) html += '★';
  if (halfStar) html += '★';
  for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) html += '☆';
  return html;
}

// Render product card HTML
export function renderProductCard(product) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const badgesHtml = product.badges.map(b => {
    const cls = b === 'Best Seller' ? 'badge-primary' : b === 'Sale' ? 'badge-accent' : 'badge-dark';
    return `<span class="badge ${cls}">${b}</span>`;
  }).join('');

  return `
    <div class="product-card reveal" data-id="${product.id}">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-card-badges">${badgesHtml}</div>
        <button class="product-card-wishlist" title="Add to wishlist">♡</button>
      </div>
      <div class="product-card-body">
        <h3 class="product-card-name">
          ${product.name}
          <span class="stars">${renderStars(product.rating)} <span class="rating-value">${product.rating}/5</span></span>
        </h3>
        ${product.tagline ? `<p class="product-card-tagline" style="font-size: var(--fs-xs); color: var(--color-gray-500); margin-bottom: var(--space-3);">${product.tagline}</p>` : ''}
        <div class="product-card-specs">
          <div class="spec-item"><span class="spec-icon">🔧</span> ${product.specs.brakes}</div>
          <div class="spec-item"><span class="spec-icon">🔩</span> ${product.specs.fork}</div>
          <div class="spec-item"><span class="spec-icon">🏗️</span> ${product.specs.frame}</div>
          <div class="spec-item"><span class="spec-icon">📐</span> ${product.specs.geometry}</div>
          <div class="spec-item"><span class="spec-icon">⭐</span> ${product.specs.special}</div>
        </div>
        <div class="price-group">
          <span class="price-original">Rs. ${formatPrice(product.mrp)} INR</span>
          <span class="price-sale">From Rs. ${formatPrice(product.price)} INR</span>
        </div>
        <div class="emi-tag">
          or <strong>₹${formatPrice(product.emi)}/Month</strong>
          <span class="emi-btn">Buy on EMI →</span>
        </div>
        <div class="product-card-footer">
          <button class="btn btn-dark btn-sm" onclick="addToCart(${product.id})">ADD TO CART</button>
          <a href="product-detail.html?id=${product.id}" class="btn btn-primary btn-sm">EXPLORE</a>
        </div>
      </div>
    </div>
  `;
}

// Simple cart and wishlist
window.cart = JSON.parse(localStorage.getItem('ravi-cart') || '[]');
window.wishlist = JSON.parse(localStorage.getItem('ravi-wishlist') || '[]');

window.addToCart = function(productId) {
  const existing = window.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    window.cart.push({ id: productId, qty: 1 });
  }
  localStorage.setItem('ravi-cart', JSON.stringify(window.cart));
  updateCartBadge();
  showToast('Added to cart! 🛒');
  openModal('cart');
};

window.addToWishlist = function(productId) {
  const existing = window.wishlist.find(id => id === productId);
  if (!existing) {
    window.wishlist.push(productId);
    localStorage.setItem('ravi-wishlist', JSON.stringify(window.wishlist));
    showToast('Added to wishlist! ❤️');
  } else {
    window.wishlist = window.wishlist.filter(id => id !== productId);
    localStorage.setItem('ravi-wishlist', JSON.stringify(window.wishlist));
    showToast('Removed from wishlist 💔');
  }
  openModal('wishlist');
};

// Modals logic
function initModals() {
  const modalsHTML = `
    <div class="modal-overlay" id="modal-overlay"></div>
    <div class="side-modal" id="side-modal">
      <div class="modal-header">
        <h3 id="modal-title">Cart</h3>
        <button class="modal-close" id="modal-close">✕</button>
      </div>
      <div class="modal-body" id="modal-body"></div>
      <div class="modal-footer" id="modal-footer"></div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalsHTML);

  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  
  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  // Hook up header buttons
  document.getElementById('cart-btn')?.addEventListener('click', () => openModal('cart'));
  document.getElementById('wishlist-btn')?.addEventListener('click', () => openModal('wishlist'));
  
  // Attach global event listener for wishlist buttons on cards
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-card-wishlist')) {
      const card = e.target.closest('.product-card');
      if (card && card.dataset.id) {
        window.addToWishlist(parseInt(card.dataset.id));
      }
    }
  });
}

window.openModal = function(type) {
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('side-modal');
  const title = document.getElementById('modal-title');
  
  if (type === 'cart') {
    title.textContent = 'Your Cart';
    renderCartModal();
  } else {
    title.textContent = 'Your Wishlist';
    renderWishlistModal();
  }

  overlay.classList.add('active');
  modal.classList.add('active');
}

window.closeModal = function() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.getElementById('side-modal').classList.remove('active');
}

function renderCartModal() {
  const body = document.getElementById('modal-body');
  const footer = document.getElementById('modal-footer');
  
  if (window.cart.length === 0) {
    body.innerHTML = `
      <div class="modal-empty">
        <div class="modal-empty-icon">🛒</div>
        <h4>Your cart is empty</h4>
        <p>Looks like you haven't added any cycles yet.</p>
        <button class="btn btn-primary" onclick="closeModal(); window.location.href='products.html'" style="margin-top: 1rem;">Continue Shopping</button>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }

  // Fetch product data from local storage if possible, or we need the products array.
  // Since components.js doesn't import data.js directly, we will dispatch an event or assume a global products map.
  // For simplicity, we'll fetch from the API if backend is running, but since we have data.js, let's just trigger a custom event or fetch it.
  fetch('/api/products')
    .then(res => res.json())
    .catch(() => import('./data.js').then(m => m.products))
    .then(products => {
      let html = '';
      let total = 0;
      window.cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (!product) return;
        total += product.price * cartItem.qty;
        html += `
          <div class="modal-item">
            <img src="${product.image}" class="modal-item-img" alt="${product.name}">
            <div class="modal-item-details">
              <div class="modal-item-title">${product.name}</div>
              <div class="modal-item-price">₹${formatPrice(product.price)}</div>
              <div class="modal-item-actions">
                <div class="qty-control">
                  <button class="qty-btn" onclick="updateCartQty(${product.id}, -1)">-</button>
                  <span>${cartItem.qty}</span>
                  <button class="qty-btn" onclick="updateCartQty(${product.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${product.id})">Remove</button>
              </div>
            </div>
          </div>
        `;
      });
      body.innerHTML = html;
      footer.innerHTML = `
        <div class="modal-total">
          <span>Total:</span>
          <span>₹${formatPrice(total)}</span>
        </div>
        <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="window.location.href='checkout.html'">Proceed to Checkout</button>
      `;
    });
}

function renderWishlistModal() {
  const body = document.getElementById('modal-body');
  const footer = document.getElementById('modal-footer');
  
  if (window.wishlist.length === 0) {
    body.innerHTML = `
      <div class="modal-empty">
        <div class="modal-empty-icon">❤️</div>
        <h4>Your wishlist is empty</h4>
        <p>Save items you like to your wishlist.</p>
        <button class="btn btn-primary" onclick="closeModal(); window.location.href='products.html'" style="margin-top: 1rem;">Continue Shopping</button>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }

  fetch('/api/products')
    .then(res => res.json())
    .catch(() => import('./data.js').then(m => m.products))
    .then(products => {
      let html = '';
      window.wishlist.forEach(id => {
        const product = products.find(p => p.id === id);
        if (!product) return;
        html += `
          <div class="modal-item">
            <img src="${product.image}" class="modal-item-img" alt="${product.name}">
            <div class="modal-item-details">
              <div class="modal-item-title">${product.name}</div>
              <div class="modal-item-price">₹${formatPrice(product.price)}</div>
              <div class="modal-item-actions" style="margin-top: 1rem;">
                <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id}); window.addToWishlist(${product.id})">Add to Cart</button>
                <button class="remove-btn" onclick="window.addToWishlist(${product.id})">Remove</button>
              </div>
            </div>
          </div>
        `;
      });
      body.innerHTML = html;
      footer.innerHTML = '';
    });
}

window.updateCartQty = function(productId, delta) {
  const item = window.cart.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      window.cart = window.cart.filter(i => i.id !== productId);
    }
    localStorage.setItem('ravi-cart', JSON.stringify(window.cart));
    updateCartBadge();
    renderCartModal();
  }
}

window.removeFromCart = function(productId) {
  window.cart = window.cart.filter(i => i.id !== productId);
  localStorage.setItem('ravi-cart', JSON.stringify(window.cart));
  updateCartBadge();
  renderCartModal();
}

function updateCartBadge() {
  const badge = document.querySelector('.badge-count');
  if (badge) {
    const count = window.cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = count;
    if (count > 0) {
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

// Toast notification
function showToast(message) {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 180px;
    right: 30px;
    background: var(--color-dark, #1A1A2E);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    z-index: 9999;
    animation: slideUp 0.3s ease, fadeIn 0.3s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// Initialize common elements
export function initCommon() {
  renderHeader();
  renderFooter();
  initModals();
  initScrollReveal();
  updateCartBadge();
}
