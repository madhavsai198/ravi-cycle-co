// ==========================================
// RAVI CYCLE COMPANY — Store Locator Page
// ==========================================

import { initCommon } from './components.js';
import { stores } from './data.js';
import { initChatbot } from './chatbot.js';

let map = null;
let markers = [];

document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  initChatbot();
  renderStoreList();
  initMap();
  initSearch();
});

function renderStoreList() {
  const list = document.getElementById('store-list');
  if (!list) return;

  list.innerHTML = stores.map((store, i) => `
    <div class="store-item ${i === 0 ? 'active' : ''}" data-id="${store.id}" data-lat="${store.lat}" data-lng="${store.lng}">
      <h3>${store.name}</h3>
      <p>
        ${store.address}<br>
        ${store.city}, ${store.state} ${store.pincode}<br>
        ${store.country}
      </p>
      <div class="store-item-meta">
        <span class="store-distance">${store.distance} km</span>
        <span class="store-more-info" onclick="toggleStoreInfo(this)">More info ▾</span>
      </div>
      <div class="store-extra-info" style="display: none; margin-top: 12px; font-size: 13px; color: #666;">
        <p>📞 ${store.phone}</p>
        <p>🕐 ${store.hours}</p>
      </div>
      <div style="margin-top: 8px;">
        <a href="https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}" 
           target="_blank" class="store-directions">📍 Directions</a>
      </div>
    </div>
  `).join('');

  // Click to center map
  list.querySelectorAll('.store-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('store-more-info') || e.target.classList.contains('store-directions')) return;
      
      list.querySelectorAll('.store-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const lat = parseFloat(item.dataset.lat);
      const lng = parseFloat(item.dataset.lng);
      if (map) {
        map.setView([lat, lng], 15);
        // Open popup
        markers.forEach(m => {
          if (Math.abs(m.getLatLng().lat - lat) < 0.001) {
            m.openPopup();
          }
        });
      }
    });
  });
}

function initMap() {
  try {
    map = L.map('map').setView([12.9716, 77.5946], 11); // Bengaluru center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);

    // Add markers
    stores.forEach(store => {
      const marker = L.marker([store.lat, store.lng])
        .addTo(map)
        .bindPopup(`
          <div style="font-family: Inter, sans-serif; min-width: 200px;">
            <h4 style="margin: 0 0 6px; font-size: 14px; color: #1a1a2e;">${store.name}</h4>
            <p style="margin: 0 0 4px; font-size: 12px; color: #666;">${store.address}, ${store.city}</p>
            <p style="margin: 0 0 4px; font-size: 12px; color: #666;">📞 ${store.phone}</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}" 
               target="_blank" 
               style="color: #00C853; font-size: 12px; font-weight: 600;">Get Directions →</a>
          </div>
        `);
      markers.push(marker);
    });

    // Fit bounds to show all markers
    if (markers.length > 0) {
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1));
    }
  } catch (e) {
    console.error('Map init error:', e);
    document.getElementById('map').innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #999;">Map loading...</div>';
  }
}

function initSearch() {
  const searchBtn = document.getElementById('store-search-btn');
  const searchInput = document.getElementById('store-search-input');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.toLowerCase().trim();
      if (!query) {
        renderStoreList();
        return;
      }

      const filtered = stores.filter(s => 
        s.name.toLowerCase().includes(query) ||
        s.address.toLowerCase().includes(query) ||
        s.city.toLowerCase().includes(query) ||
        s.pincode.includes(query)
      );

      const list = document.getElementById('store-list');
      if (filtered.length === 0) {
        list.innerHTML = '<div style="padding: 40px; text-align: center; color: #999;">No stores found for your search. Try a different location.</div>';
      } else {
        // Re-render with filtered
        list.innerHTML = filtered.map((store, i) => `
          <div class="store-item ${i === 0 ? 'active' : ''}" data-id="${store.id}" data-lat="${store.lat}" data-lng="${store.lng}">
            <h3>${store.name}</h3>
            <p>${store.address}<br>${store.city}, ${store.state} ${store.pincode}</p>
            <div class="store-item-meta">
              <span class="store-distance">${store.distance} km</span>
            </div>
            <div style="margin-top: 8px;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}" 
                 target="_blank" class="store-directions">📍 Directions</a>
            </div>
          </div>
        `).join('');
      }
    });
  }
}

// Global function for "More info" toggle
window.toggleStoreInfo = function(el) {
  const info = el.closest('.store-item').querySelector('.store-extra-info');
  if (info) {
    const isVisible = info.style.display !== 'none';
    info.style.display = isVisible ? 'none' : 'block';
    el.textContent = isVisible ? 'More info ▾' : 'Less info ▴';
  }
};
