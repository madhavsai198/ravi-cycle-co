import"./footer-HvQ3RPj_.js";import{o as e,r as t,t as n}from"./chatbot-noqMi_nh.js";/* empty css                 */document.addEventListener(`DOMContentLoaded`,async()=>{t(),n();try{let t=await(await fetch(`/api/accessories`)).json(),n=document.getElementById(`accessories-grid`);n.innerHTML=t.map(t=>`
          <div class="accessory-card" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
            <div class="accessory-image" style="height: 250px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
              <img src="${t.image}" alt="${t.name}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
            </div>
            <h3 style="font-size: 14px; font-weight: 500; margin-bottom: 5px; color: #333;">${t.name}</h3>
            <div class="stars" style="color: #FFA41C; font-size: 14px; margin-bottom: 10px;">
              ${e(t.rating)} <span style="color: #666; font-size: 12px;">(${t.reviews})</span>
            </div>
            <div class="price" style="margin-bottom: 15px; font-size: 16px;">
              <span style="text-decoration: line-through; color: #999; margin-right: 8px;">₹${t.mrp}</span>
              <strong style="color: #111;">${t.price===399?`From ₹399`:`₹`+t.price}</strong>
            </div>
            ${t.inStock?`<button class="btn btn-accent" style="width: 100%; border-radius: 4px; padding: 10px; font-weight: 500; text-transform: none;" onclick="addToCart('${t._id}')">${t.price===399?`Choose options`:`Add to cart`}</button>`:`<button class="btn" style="width: 100%; border-radius: 4px; padding: 10px; font-weight: 500; background: #f8c77e; color: #fff; cursor: not-allowed;" disabled>Sold out</button>`}
          </div>
        `).join(``)}catch(e){console.error(`Error fetching accessories:`,e)}});