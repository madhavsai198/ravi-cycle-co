import{o as e}from"./data-CISQquEW.js";import"./footer-HvQ3RPj_.js";import{r as t,t as n}from"./chatbot-noqMi_nh.js";var r=null,i=[];document.addEventListener(`DOMContentLoaded`,()=>{t(),n(),a(),o(),s()});function a(){let t=document.getElementById(`store-list`);t&&(t.innerHTML=e.map((e,t)=>`
    <div class="store-item ${t===0?`active`:``}" data-id="${e.id}" data-lat="${e.lat}" data-lng="${e.lng}">
      <h3>${e.name}</h3>
      <p>
        ${e.address}<br>
        ${e.city}, ${e.state} ${e.pincode}<br>
        ${e.country}
      </p>
      <div class="store-item-meta">
        <span class="store-distance">${e.distance} km</span>
        <span class="store-more-info" onclick="toggleStoreInfo(this)">More info ▾</span>
      </div>
      <div class="store-extra-info" style="display: none; margin-top: 12px; font-size: 13px; color: #666;">
        <p>📞 ${e.phone}</p>
        <p>🕐 ${e.hours}</p>
      </div>
      <div style="margin-top: 8px;">
        <a href="https://www.google.com/maps/dir/?api=1&destination=${e.lat},${e.lng}" 
           target="_blank" class="store-directions">📍 Directions</a>
      </div>
    </div>
  `).join(``),t.querySelectorAll(`.store-item`).forEach(e=>{e.addEventListener(`click`,n=>{if(n.target.classList.contains(`store-more-info`)||n.target.classList.contains(`store-directions`))return;t.querySelectorAll(`.store-item`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let a=parseFloat(e.dataset.lat),o=parseFloat(e.dataset.lng);r&&(r.setView([a,o],15),i.forEach(e=>{Math.abs(e.getLatLng().lat-a)<.001&&e.openPopup()}))})}))}function o(){try{if(r=L.map(`map`).setView([12.9716,77.5946],11),L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,{attribution:`© OpenStreetMap contributors`,maxZoom:18}).addTo(r),e.forEach(e=>{let t=L.marker([e.lat,e.lng]).addTo(r).bindPopup(`
          <div style="font-family: Inter, sans-serif; min-width: 200px;">
            <h4 style="margin: 0 0 6px; font-size: 14px; color: #1a1a2e;">${e.name}</h4>
            <p style="margin: 0 0 4px; font-size: 12px; color: #666;">${e.address}, ${e.city}</p>
            <p style="margin: 0 0 4px; font-size: 12px; color: #666;">📞 ${e.phone}</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${e.lat},${e.lng}" 
               target="_blank" 
               style="color: #00C853; font-size: 12px; font-weight: 600;">Get Directions →</a>
          </div>
        `);i.push(t)}),i.length>0){let e=L.featureGroup(i);r.fitBounds(e.getBounds().pad(.1))}}catch(e){console.error(`Map init error:`,e),document.getElementById(`map`).innerHTML=`<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #999;">Map loading...</div>`}}function s(){let t=document.getElementById(`store-search-btn`),n=document.getElementById(`store-search-input`);t&&t.addEventListener(`click`,()=>{let t=n.value.toLowerCase().trim();if(!t){a();return}let r=e.filter(e=>e.name.toLowerCase().includes(t)||e.address.toLowerCase().includes(t)||e.city.toLowerCase().includes(t)||e.pincode.includes(t)),i=document.getElementById(`store-list`);r.length===0?i.innerHTML=`<div style="padding: 40px; text-align: center; color: #999;">No stores found for your search. Try a different location.</div>`:i.innerHTML=r.map((e,t)=>`
          <div class="store-item ${t===0?`active`:``}" data-id="${e.id}" data-lat="${e.lat}" data-lng="${e.lng}">
            <h3>${e.name}</h3>
            <p>${e.address}<br>${e.city}, ${e.state} ${e.pincode}</p>
            <div class="store-item-meta">
              <span class="store-distance">${e.distance} km</span>
            </div>
            <div style="margin-top: 8px;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=${e.lat},${e.lng}" 
                 target="_blank" class="store-directions">📍 Directions</a>
            </div>
          </div>
        `).join(``)})}window.toggleStoreInfo=function(e){let t=e.closest(`.store-item`).querySelector(`.store-extra-info`);if(t){let n=t.style.display!==`none`;t.style.display=n?`none`:`block`,e.textContent=n?`More info ▾`:`Less info ▴`}};