// ==========================================
// RAVI CYCLE COMPANY — ChatBot Widget
// ==========================================

import { chatbotResponses } from './data.js';

function getCurrentTime() {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function findResponse(message) {
  const msg = message.toLowerCase().trim();
  
  if (['hi', 'hello', 'hey', 'hii', 'helo', 'namaste'].some(w => msg.includes(w))) {
    const greetings = chatbotResponses.greetings;
    return greetings[Math.floor(Math.random() * greetings.length)];
  }
  if (['price', 'cost', 'rate', 'how much', 'budget', 'cheap', 'expensive'].some(w => msg.includes(w))) {
    return chatbotResponses.price;
  }
  if (['kid', 'child', 'children', 'boy', 'girl', 'age', 'young', 'junior'].some(w => msg.includes(w))) {
    return chatbotResponses.kids;
  }
  if (['emi', 'installment', 'monthly', 'loan', 'finance'].some(w => msg.includes(w))) {
    return chatbotResponses.emi;
  }
  if (['store', 'shop', 'location', 'branch', 'near', 'address', 'where'].some(w => msg.includes(w))) {
    return chatbotResponses.stores;
  }
  if (['warranty', 'guarantee', 'repair', 'service'].some(w => msg.includes(w))) {
    return chatbotResponses.warranty;
  }
  if (['delivery', 'shipping', 'ship', 'deliver', 'order', 'track'].some(w => msg.includes(w))) {
    return chatbotResponses.delivery;
  }
  if (['product', 'cycle', 'bike', 'bicycle', 'model', 'range', 'catalog', 'show'].some(w => msg.includes(w))) {
    return chatbotResponses.products;
  }
  return chatbotResponses.default;
}

export function initChatbot() {
  // Create chatbot HTML
  const chatbotHTML = `
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
            <div class="chat-time">${getCurrentTime()}</div>
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
  `;

  // Insert into page
  const container = document.createElement('div');
  container.id = 'chatbot-container';
  container.innerHTML = chatbotHTML;
  document.body.appendChild(container);

  // References
  const toggle = document.getElementById('chatbot-toggle');
  const window_ = document.getElementById('chatbot-window');
  const close = document.getElementById('chatbot-close');
  const messages = document.getElementById('chatbot-messages');
  const input = document.getElementById('chatbot-input');
  const send = document.getElementById('chatbot-send');
  const quickReplies = document.getElementById('quick-replies');

  // Toggle chat
  toggle.addEventListener('click', () => {
    window_.classList.toggle('open');
    toggle.classList.toggle('active');
    if (window_.classList.contains('open')) {
      input.focus();
    }
  });

  close.addEventListener('click', () => {
    window_.classList.remove('open');
    toggle.classList.remove('active');
  });

  // Send message
  function sendMessage(text) {
    if (!text.trim()) return;

    // User message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.innerHTML = `
      <div class="chat-avatar">👤</div>
      <div>
        <div class="chat-bubble">${text}</div>
        <div class="chat-time">${getCurrentTime()}</div>
      </div>
    `;
    messages.appendChild(userMsg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Hide quick replies after first message
    quickReplies.style.display = 'none';

    // Typing indicator
    const typing = document.createElement('div');
    typing.className = 'chat-message bot';
    typing.id = 'typing-indicator';
    typing.innerHTML = `
      <div class="chat-avatar">🤖</div>
      <div>
        <div class="chat-bubble">
          <div class="typing-indicator">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `;
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    // Bot response after delay
    setTimeout(() => {
      typing.remove();
      const response = findResponse(text);
      const botMsg = document.createElement('div');
      botMsg.className = 'chat-message bot';
      botMsg.innerHTML = `
        <div class="chat-avatar">🤖</div>
        <div>
          <div class="chat-bubble">${response.replace(/\n/g, '<br>')}</div>
          <div class="chat-time">${getCurrentTime()}</div>
        </div>
      `;
      messages.appendChild(botMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 1200);
  }

  send.addEventListener('click', () => sendMessage(input.value));
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage(input.value);
  });

  // Quick replies
  quickReplies.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply')) {
      sendMessage(e.target.dataset.msg);
    }
  });
}
