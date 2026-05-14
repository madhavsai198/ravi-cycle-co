import{r as e}from"./data-CISQquEW.js";var t=`modulepreload`,n=function(e){return`/`+e},r={},i=function(e,i,a){let o=Promise.resolve();if(i&&i.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=n(i,a),i in r)return;r[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``;if(a)for(let t=e.length-1;t>=0;t--){let n=e[t];if(n.href===i&&(!o||n.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=o?`stylesheet`:t,o||(l.as=`script`),l.crossOrigin=``,l.href=i,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),o)return new Promise((e,t)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})};function a(){let e=window.location.pathname;return e.includes(`products.html`)?`products`:e.includes(`product-detail.html`)?`product-detail`:e.includes(`store-locator.html`)?`store-locator`:e.includes(`about.html`)?`about`:e.includes(`contact.html`)?`contact`:`home`}function o(){let e=a(),t=document.getElementById(`site-header`);if(!t)return;t.innerHTML=`
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
          <a href="index.html" class="nav-link ${e===`home`?`active`:``}">Home</a>
          <div class="nav-dropdown">
            <a href="products.html" class="nav-link nav-dropdown-trigger ${e===`products`?`active`:``}">
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
          <a href="store-locator.html" class="nav-link ${e===`store-locator`?`active`:``}">Store Locator</a>
          <a href="about.html" class="nav-link ${e===`about`?`active`:``}">About</a>
          <a href="contact.html" class="nav-link ${e===`contact`?`active`:``}">Contact</a>
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
      <a href="index.html" class="nav-link ${e===`home`?`active`:``}">Home</a>
      <a href="products.html" class="nav-link ${e===`products`?`active`:``}">All Cycles</a>
      <a href="products.html?category=Mountain" class="nav-link">Mountain Bikes</a>
      <a href="products.html?category=Road" class="nav-link">Road Bikes</a>
      <a href="products.html?category=Hybrid" class="nav-link">Hybrid Bikes</a>
      <a href="products.html?category=Kids" class="nav-link">Kids Bikes</a>
      <a href="products.html?category=Electric" class="nav-link">Electric Bikes</a>
      <a href="store-locator.html" class="nav-link ${e===`store-locator`?`active`:``}">Store Locator</a>
      <a href="about.html" class="nav-link ${e===`about`?`active`:``}">About</a>
      <a href="contact.html" class="nav-link ${e===`contact`?`active`:``}">Contact</a>
    </div>
  `;let n=document.getElementById(`mobile-menu-btn`),r=document.getElementById(`mobile-menu`);n&&r&&n.addEventListener(`click`,()=>{n.classList.toggle(`active`),r.classList.toggle(`active`)}),window.addEventListener(`scroll`,()=>{window.scrollY>50?t.classList.add(`scrolled`):t.classList.remove(`scrolled`)});let i=document.getElementById(`nav-search-input`);i&&i.addEventListener(`keypress`,e=>{e.key===`Enter`&&i.value.trim()&&(window.location.href=`products.html?search=${encodeURIComponent(i.value.trim())}`)})}function s(){let e=document.getElementById(`site-footer`);if(!e)return;e.innerHTML=`
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
  `;let t=document.getElementById(`footer-newsletter`);t&&t.addEventListener(`submit`,e=>{e.preventDefault();let n=t.querySelector(`input`);n.value&&=(alert(`Thank you for subscribing! 🎉`),``)})}function c(){let e=document.querySelectorAll(`.reveal`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{threshold:.1,rootMargin:`0px 0px -50px 0px`});e.forEach(e=>t.observe(e)),setTimeout(()=>{e.forEach(e=>{e.classList.contains(`visible`)||e.classList.add(`visible`)})},2e3)}function l(e){return new Intl.NumberFormat(`en-IN`).format(e)}function u(e){let t=Math.floor(e),n=e%1>=.5,r=``;for(let e=0;e<t;e++)r+=`★`;n&&(r+=`★`);for(let e=t+ +!!n;e<5;e++)r+=`☆`;return r}function d(e){Math.round((e.mrp-e.price)/e.mrp*100);let t=e.badges.map(e=>`<span class="badge ${e===`Best Seller`?`badge-primary`:e===`Sale`?`badge-accent`:`badge-dark`}">${e}</span>`).join(``);return`
    <div class="product-card reveal" data-id="${e.id}">
      <div class="product-card-image">
        <img src="${e.image}" alt="${e.name}" loading="lazy">
        <div class="product-card-badges">${t}</div>
        <button class="product-card-wishlist" title="Add to wishlist">♡</button>
      </div>
      <div class="product-card-body">
        <h3 class="product-card-name">
          ${e.name}
          <span class="stars">${u(e.rating)} <span class="rating-value">${e.rating}/5</span></span>
        </h3>
        ${e.tagline?`<p class="product-card-tagline" style="font-size: var(--fs-xs); color: var(--color-gray-500); margin-bottom: var(--space-3);">${e.tagline}</p>`:``}
        <div class="product-card-specs">
          <div class="spec-item"><span class="spec-icon">🔧</span> ${e.specs.brakes}</div>
          <div class="spec-item"><span class="spec-icon">🔩</span> ${e.specs.fork}</div>
          <div class="spec-item"><span class="spec-icon">🏗️</span> ${e.specs.frame}</div>
          <div class="spec-item"><span class="spec-icon">📐</span> ${e.specs.geometry}</div>
          <div class="spec-item"><span class="spec-icon">⭐</span> ${e.specs.special}</div>
        </div>
        <div class="price-group">
          <span class="price-original">Rs. ${l(e.mrp)} INR</span>
          <span class="price-sale">From Rs. ${l(e.price)} INR</span>
        </div>
        <div class="emi-tag">
          or <strong>₹${l(e.emi)}/Month</strong>
          <span class="emi-btn">Buy on EMI →</span>
        </div>
        <div class="product-card-footer">
          <button class="btn btn-dark btn-sm" onclick="addToCart(${e.id})">ADD TO CART</button>
          <a href="product-detail.html?id=${e.id}" class="btn btn-primary btn-sm">EXPLORE</a>
        </div>
      </div>
    </div>
  `}window.cart=JSON.parse(localStorage.getItem(`ravi-cart`)||`[]`),window.wishlist=JSON.parse(localStorage.getItem(`ravi-wishlist`)||`[]`),window.addToCart=function(e){let t=window.cart.find(t=>t.id===e);t?t.qty++:window.cart.push({id:e,qty:1}),localStorage.setItem(`ravi-cart`,JSON.stringify(window.cart)),h(),g(`Added to cart! 🛒`),openModal(`cart`)},window.addToWishlist=function(e){window.wishlist.find(t=>t===e)?(window.wishlist=window.wishlist.filter(t=>t!==e),localStorage.setItem(`ravi-wishlist`,JSON.stringify(window.wishlist)),g(`Removed from wishlist 💔`)):(window.wishlist.push(e),localStorage.setItem(`ravi-wishlist`,JSON.stringify(window.wishlist)),g(`Added to wishlist! ❤️`)),openModal(`wishlist`)};function f(){document.body.insertAdjacentHTML(`beforeend`,`
    <div class="modal-overlay" id="modal-overlay"></div>
    <div class="side-modal" id="side-modal">
      <div class="modal-header">
        <h3 id="modal-title">Cart</h3>
        <button class="modal-close" id="modal-close">✕</button>
      </div>
      <div class="modal-body" id="modal-body"></div>
      <div class="modal-footer" id="modal-footer"></div>
    </div>
  `);let e=document.getElementById(`modal-overlay`),t=document.getElementById(`modal-close`);e.addEventListener(`click`,closeModal),t.addEventListener(`click`,closeModal),document.getElementById(`cart-btn`)?.addEventListener(`click`,()=>openModal(`cart`)),document.getElementById(`wishlist-btn`)?.addEventListener(`click`,()=>openModal(`wishlist`)),document.addEventListener(`click`,e=>{if(e.target.classList.contains(`product-card-wishlist`)){let t=e.target.closest(`.product-card`);t&&t.dataset.id&&window.addToWishlist(parseInt(t.dataset.id))}})}window.openModal=function(e){let t=document.getElementById(`modal-overlay`),n=document.getElementById(`side-modal`),r=document.getElementById(`modal-title`);e===`cart`?(r.textContent=`Your Cart`,p()):(r.textContent=`Your Wishlist`,m()),t.classList.add(`active`),n.classList.add(`active`)},window.closeModal=function(){document.getElementById(`modal-overlay`).classList.remove(`active`),document.getElementById(`side-modal`).classList.remove(`active`)};function p(){let e=document.getElementById(`modal-body`),t=document.getElementById(`modal-footer`);if(window.cart.length===0){e.innerHTML=`
      <div class="modal-empty">
        <div class="modal-empty-icon">🛒</div>
        <h4>Your cart is empty</h4>
        <p>Looks like you haven't added any cycles yet.</p>
        <button class="btn btn-primary" onclick="closeModal(); window.location.href='products.html'" style="margin-top: 1rem;">Continue Shopping</button>
      </div>
    `,t.innerHTML=``;return}fetch(`/api/products`).then(e=>e.json()).catch(()=>i(()=>import(`./data-CISQquEW.js`).then(e=>e.i).then(e=>e.products),[])).then(n=>{let r=``,i=0;window.cart.forEach(e=>{let t=n.find(t=>t.id===e.id);t&&(i+=t.price*e.qty,r+=`
          <div class="modal-item">
            <img src="${t.image}" class="modal-item-img" alt="${t.name}">
            <div class="modal-item-details">
              <div class="modal-item-title">${t.name}</div>
              <div class="modal-item-price">₹${l(t.price)}</div>
              <div class="modal-item-actions">
                <div class="qty-control">
                  <button class="qty-btn" onclick="updateCartQty(${t.id}, -1)">-</button>
                  <span>${e.qty}</span>
                  <button class="qty-btn" onclick="updateCartQty(${t.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${t.id})">Remove</button>
              </div>
            </div>
          </div>
        `)}),e.innerHTML=r,t.innerHTML=`
        <div class="modal-total">
          <span>Total:</span>
          <span>₹${l(i)}</span>
        </div>
        <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="window.location.href='checkout.html'">Proceed to Checkout</button>
      `})}function m(){let e=document.getElementById(`modal-body`),t=document.getElementById(`modal-footer`);if(window.wishlist.length===0){e.innerHTML=`
      <div class="modal-empty">
        <div class="modal-empty-icon">❤️</div>
        <h4>Your wishlist is empty</h4>
        <p>Save items you like to your wishlist.</p>
        <button class="btn btn-primary" onclick="closeModal(); window.location.href='products.html'" style="margin-top: 1rem;">Continue Shopping</button>
      </div>
    `,t.innerHTML=``;return}fetch(`/api/products`).then(e=>e.json()).catch(()=>i(()=>import(`./data-CISQquEW.js`).then(e=>e.i).then(e=>e.products),[])).then(n=>{let r=``;window.wishlist.forEach(e=>{let t=n.find(t=>t.id===e);t&&(r+=`
          <div class="modal-item">
            <img src="${t.image}" class="modal-item-img" alt="${t.name}">
            <div class="modal-item-details">
              <div class="modal-item-title">${t.name}</div>
              <div class="modal-item-price">₹${l(t.price)}</div>
              <div class="modal-item-actions" style="margin-top: 1rem;">
                <button class="btn btn-primary btn-sm" onclick="addToCart(${t.id}); window.addToWishlist(${t.id})">Add to Cart</button>
                <button class="remove-btn" onclick="window.addToWishlist(${t.id})">Remove</button>
              </div>
            </div>
          </div>
        `)}),e.innerHTML=r,t.innerHTML=``})}window.updateCartQty=function(e,t){let n=window.cart.find(t=>t.id===e);n&&(n.qty+=t,n.qty<=0&&(window.cart=window.cart.filter(t=>t.id!==e)),localStorage.setItem(`ravi-cart`,JSON.stringify(window.cart)),h(),p())},window.removeFromCart=function(e){window.cart=window.cart.filter(t=>t.id!==e),localStorage.setItem(`ravi-cart`,JSON.stringify(window.cart)),h(),p()};function h(){let e=document.querySelector(`.badge-count`);if(e){let t=window.cart.reduce((e,t)=>e+t.qty,0);e.textContent=t,t>0?e.style.display=`flex`:e.style.display=`none`}}function g(e){let t=document.querySelector(`.toast-notification`);t&&t.remove();let n=document.createElement(`div`);n.className=`toast-notification`,n.textContent=e,n.style.cssText=`
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
  `,document.body.appendChild(n),setTimeout(()=>n.remove(),2500)}function _(){o(),s(),f(),c(),h()}function v(){return new Date().toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,hour12:!0})}function y(t){let n=t.toLowerCase().trim();if([`hi`,`hello`,`hey`,`hii`,`helo`,`namaste`].some(e=>n.includes(e))){let t=e.greetings;return t[Math.floor(Math.random()*t.length)]}return[`price`,`cost`,`rate`,`how much`,`budget`,`cheap`,`expensive`].some(e=>n.includes(e))?e.price:[`kid`,`child`,`children`,`boy`,`girl`,`age`,`young`,`junior`].some(e=>n.includes(e))?e.kids:[`emi`,`installment`,`monthly`,`loan`,`finance`].some(e=>n.includes(e))?e.emi:[`store`,`shop`,`location`,`branch`,`near`,`address`,`where`].some(e=>n.includes(e))?e.stores:[`warranty`,`guarantee`,`repair`,`service`].some(e=>n.includes(e))?e.warranty:[`delivery`,`shipping`,`ship`,`deliver`,`order`,`track`].some(e=>n.includes(e))?e.delivery:[`product`,`cycle`,`bike`,`bicycle`,`model`,`range`,`catalog`,`show`].some(e=>n.includes(e))?e.products:e.default}function b(){let e=`
    <!-- WhatsApp Button -->
    <a href="https://wa.me/919393934151?text=Hi%20RAVI%20CYCLE%20CO!%20I%20have%20a%20query" 
       class="whatsapp-btn" id="whatsapp-btn" target="_blank" rel="noopener">
      💬
      <span class="notification-dot">1</span>
      <span class="tooltip">Chat with us</span>
    </a>

    <!-- Chatbot Toggle -->
    <button class="chatbot-toggle" id="chatbot-toggle" title="Chat with us">
      🤖
    </button>

    <!-- Chat Window -->
    <div class="chatbot-window" id="chatbot-window">
      <div class="chatbot-header">
        <div class="chatbot-avatar">🤖</div>
        <div class="chatbot-title">
          <h4>ChatBot</h4>
          <p>Here to help!</p>
        </div>
        <button class="chatbot-close" id="chatbot-close">✕</button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages">
        <div class="chat-message bot">
          <div class="chat-avatar">🤖</div>
          <div>
            <div class="chat-bubble">Hi! 👋 Welcome to Ravi Cycle Company. How can I help you today?</div>
            <div class="chat-time">${v()}</div>
          </div>
        </div>
      </div>
      <div class="quick-replies" id="quick-replies">
        <button class="quick-reply" data-msg="What cycles do you have?">Our Cycles</button>
        <button class="quick-reply" data-msg="What are the prices?">Prices</button>
        <button class="quick-reply" data-msg="Do you have EMI options?">EMI Options</button>
        <button class="quick-reply" data-msg="Where are your stores?">Store Locations</button>
        <button class="quick-reply" data-msg="Do you have kids cycles?">Kids Bikes</button>
      </div>
      <div class="chatbot-input">
        <input type="text" id="chatbot-input" placeholder="Type your message..." autocomplete="off">
        <button class="chatbot-send" id="chatbot-send">➤</button>
      </div>
    </div>
  `,t=document.createElement(`div`);t.id=`chatbot-container`,t.innerHTML=e,document.body.appendChild(t);let n=document.getElementById(`chatbot-toggle`),r=document.getElementById(`chatbot-window`),i=document.getElementById(`chatbot-close`),a=document.getElementById(`chatbot-messages`),o=document.getElementById(`chatbot-input`),s=document.getElementById(`chatbot-send`),c=document.getElementById(`quick-replies`);n.addEventListener(`click`,()=>{r.classList.toggle(`open`),n.classList.toggle(`active`),r.classList.contains(`open`)&&o.focus()}),i.addEventListener(`click`,()=>{r.classList.remove(`open`),n.classList.remove(`active`)});function l(e){if(!e.trim())return;let t=document.createElement(`div`);t.className=`chat-message user`,t.innerHTML=`
      <div class="chat-avatar">👤</div>
      <div>
        <div class="chat-bubble">${e}</div>
        <div class="chat-time">${v()}</div>
      </div>
    `,a.appendChild(t),o.value=``,a.scrollTop=a.scrollHeight,c.style.display=`none`;let n=document.createElement(`div`);n.className=`chat-message bot`,n.id=`typing-indicator`,n.innerHTML=`
      <div class="chat-avatar">🤖</div>
      <div>
        <div class="chat-bubble">
          <div class="typing-indicator">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `,a.appendChild(n),a.scrollTop=a.scrollHeight,setTimeout(()=>{n.remove();let t=y(e),r=document.createElement(`div`);r.className=`chat-message bot`,r.innerHTML=`
        <div class="chat-avatar">🤖</div>
        <div>
          <div class="chat-bubble">${t.replace(/\n/g,`<br>`)}</div>
          <div class="chat-time">${v()}</div>
        </div>
      `,a.appendChild(r),a.scrollTop=a.scrollHeight},1200)}s.addEventListener(`click`,()=>l(o.value)),o.addEventListener(`keypress`,e=>{e.key===`Enter`&&l(o.value)}),c.addEventListener(`click`,e=>{e.target.classList.contains(`quick-reply`)&&l(e.target.dataset.msg)})}export{d as a,c as i,l as n,u as o,_ as r,b as t};