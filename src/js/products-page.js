// ==========================================
// RAVI CYCLE COMPANY — Products Page Logic
// ==========================================

import { initCommon, renderProductCard, initScrollReveal } from './components.js';
import { products, categories } from './data.js';
import { initChatbot } from './chatbot.js';

let filteredProducts = [...products];
let activeColorFilter = null;

document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  initChatbot();
  initFilters();
  initSort();
  initViewToggle();
  initMobileFilter();
  applyURLFilters();
  renderProducts();
});

function applyURLFilters() {
  const params = new URLSearchParams(window.location.search);
  
  // Category from URL
  const category = params.get('category');
  if (category) {
    const checkbox = document.querySelector(`input[name="category"][value="${category}"]`);
    if (checkbox) checkbox.checked = true;
    document.getElementById('breadcrumb-current').textContent = `${category} Bikes`;
  }

  // Max price from URL
  const maxPrice = params.get('maxPrice');
  if (maxPrice && maxPrice !== 'Infinity') {
    const range = document.getElementById('price-range');
    if (range) {
      range.value = maxPrice;
      document.getElementById('price-range-value').textContent = `₹${Number(maxPrice).toLocaleString('en-IN')}`;
    }
  }

  // Search from URL
  const search = params.get('search');
  if (search) {
    document.getElementById('breadcrumb-current').textContent = `Search: "${search}"`;
  }
}

function initFilters() {
  // Render category checkboxes
  const categoryContainer = document.getElementById('category-filters');
  if (categoryContainer) {
    categoryContainer.innerHTML = categories.map(cat => `
      <label class="filter-checkbox">
        <input type="checkbox" name="category" value="${cat.name}">
        ${cat.name}
        <span class="count">(${products.filter(p => p.category === cat.name).length})</span>
      </label>
    `).join('');
  }

  // Update stock counts
  document.getElementById('in-stock-count').textContent = `(${products.filter(p => p.inStock).length})`;
  document.getElementById('out-stock-count').textContent = `(${products.filter(p => !p.inStock).length})`;

  // Listen for filter changes
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filterProducts();
      renderProducts();
    });
  });

  // Price range
  const priceRange = document.getElementById('price-range');
  if (priceRange) {
    priceRange.addEventListener('input', (e) => {
      document.getElementById('price-range-value').textContent = `₹${Number(e.target.value).toLocaleString('en-IN')}`;
      filterProducts();
      renderProducts();
    });
  }

  // Color swatches
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      if (swatch.classList.contains('active')) {
        swatch.classList.remove('active');
        activeColorFilter = null;
      } else {
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        activeColorFilter = swatch.dataset.color;
      }
      filterProducts();
      renderProducts();
    });
  });

  // Toggle filter groups
  document.querySelectorAll('.filter-group-header').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('collapsed');
    });
  });

  // Reset filters
  document.getElementById('reset-filters').addEventListener('click', resetFilters);
  
  const clearAllBtn = document.getElementById('clear-all-filters');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', resetFilters);
  }
}

function resetFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = cb.value === 'inStock';
  });
  const priceRange = document.getElementById('price-range');
  if (priceRange) {
    priceRange.value = 50000;
    document.getElementById('price-range-value').textContent = '₹50,000';
  }
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  activeColorFilter = null;
  
  filteredProducts = [...products];
  renderProducts();
}

function filterProducts() {
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get('search')?.toLowerCase() || '';

  // Get selected values
  const selectedCategories = [...document.querySelectorAll('input[name="category"]:checked')].map(cb => cb.value);
  const selectedWheelSizes = [...document.querySelectorAll('input[name="wheelSize"]:checked')].map(cb => cb.value);
  const selectedGears = [...document.querySelectorAll('input[name="gear"]:checked')].map(cb => cb.value);
  const showInStock = document.querySelector('input[value="inStock"]').checked;
  const showOutOfStock = document.querySelector('input[value="outOfStock"]').checked;
  const maxPrice = Number(document.getElementById('price-range').value);

  filteredProducts = products.filter(product => {
    // Search
    if (searchTerm) {
      const terms = searchTerm.split(' ').filter(t => t.trim());
      const searchableText = `${product.name} ${product.category} ${product.description} ${product.tagline || ''}`.toLowerCase();
      
      // All terms must be present in the searchable text
      const matchesSearch = terms.every(term => searchableText.includes(term));
      if (!matchesSearch) return false;
    }

    // Availability
    if (!showInStock && product.inStock) return false;
    if (!showOutOfStock && !product.inStock) return false;
    if (!showInStock && !showOutOfStock) return false;

    // Price
    if (product.price > maxPrice) return false;

    // Category
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;

    // Wheel size
    if (selectedWheelSizes.length > 0 && !selectedWheelSizes.includes(product.wheelSize)) return false;

    // Gear type
    if (selectedGears.length > 0 && !selectedGears.some(g => product.gears.includes(g))) return false;

    // Color
    if (activeColorFilter && !product.colors.some(c => c.name === activeColorFilter)) return false;

    return true;
  });
}

function initSort() {
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortProducts(sortSelect.value);
      renderProducts();
    });
  }
}

function sortProducts(sortBy) {
  switch (sortBy) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    default: // bestselling
      filteredProducts.sort((a, b) => b.reviews - a.reviews);
  }
}

function initViewToggle() {
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const grid = document.getElementById('products-grid');
      if (btn.dataset.view === 'list') {
        grid.classList.add('list-view');
      } else {
        grid.classList.remove('list-view');
      }
    });
  });
}

function initMobileFilter() {
  const filterBtn = document.getElementById('mobile-filter-btn');
  const sidebar = document.getElementById('filters-sidebar');
  const overlay = document.getElementById('filter-overlay');

  if (filterBtn && sidebar) {
    filterBtn.addEventListener('click', () => {
      sidebar.classList.add('open');
      overlay.classList.add('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  const noResults = document.getElementById('no-results');

  if (!grid) return;

  filterProducts();
  
  // Apply current sort
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortProducts(sortSelect.value);

  countEl.textContent = `${filteredProducts.length} PRODUCTS`;

  if (filteredProducts.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
  } else {
    grid.style.display = '';
    noResults.style.display = 'none';
    grid.innerHTML = filteredProducts.map(p => renderProductCard(p)).join('');
    initScrollReveal();
  }
}
