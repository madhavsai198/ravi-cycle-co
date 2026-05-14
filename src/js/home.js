// ==========================================
// RAVI CYCLE COMPANY — Homepage Logic
// ==========================================

import { initCommon, renderProductCard } from './components.js';
import { products, categories, budgetRanges, testimonials } from './data.js';
import { initChatbot } from './chatbot.js';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderCategories();
  renderBudget();
  renderTestimonials();
  createHeroParticles();
  initCommon(); // Called after DOM injection so scroll reveal works on new elements
  initChatbot();
  initNewsletterForm();
});

function renderFeaturedProducts() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  
  // Show top 4 products
  const featured = products.filter(p => p.badges.includes('Best Seller')).slice(0, 4);
  if (featured.length === 0) {
    grid.innerHTML = products.slice(0, 4).map(p => renderProductCard(p)).join('');
  } else {
    grid.innerHTML = featured.map(p => renderProductCard(p)).join('');
  }
}

function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;

  grid.innerHTML = categories.map((cat, i) => `
    <a href="products.html?category=${cat.name}" class="category-card reveal" style="animation-delay: ${i * 0.1}s">
      <div class="category-card-bg" style="background-color: var(--color-gray-50); background-image: url('${cat.image}'); background-size: contain; background-repeat: no-repeat; background-position: center top 20px;"></div>
      <div class="category-card-content">
        <div class="category-card-icon">${cat.icon}</div>
        <h3>${cat.name}</h3>
        <p>${cat.count} Products</p>
      </div>
      <div class="explore-arrow">→</div>
    </a>
  `).join('');
}

function renderBudget() {
  const grid = document.getElementById('budget-grid');
  if (!grid) return;

  grid.innerHTML = budgetRanges.map((range, i) => `
    <a href="products.html?maxPrice=${range.max}" class="budget-card reveal" style="animation-delay: ${i * 0.1}s">
      <div class="budget-card-image">
        <img src="${range.image}" alt="${range.label}">
      </div>
      <h4>${range.label}</h4>
      <span style="font-size: var(--fs-xs); color: var(--color-primary); font-weight: var(--fw-bold); margin-top: var(--space-2); display: inline-block;">Shop Now →</span>
    </a>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal" style="animation-delay: ${i * 0.15}s">
      <div class="testimonial-quote">${t.quote}</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.initial}</div>
        <div class="testimonial-info">
          <h5>${t.author}</h5>
          <p>${t.location}</p>
        </div>
        <div class="stars" style="margin-left: auto;">★★★★★</div>
      </div>
    </div>
  `).join('');
}

function createHeroParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.animationDuration = (5 + Math.random() * 5) + 's';
    container.appendChild(particle);
  }
}

function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input.value) {
        alert('Thank you for subscribing! 🎉');
        input.value = '';
      }
    });
  }
}
