function initChatWidget() {
  const chatHtml = `
    <!-- Chat Toggle Button -->
    <div class="chat-btn" id="chat-btn" title="Chat with us">
      🤖
    </div>

    <!-- Chat Window -->
    <div class="chat-window" id="chat-window">
      <div class="chat-header">
        <span>AI Support</span>
        <button class="chat-close" id="chat-close">&times;</button>
      </div>
      <div class="chat-body" id="chat-body">
        <div class="chat-message message-bot">
          Hi there! 👋 I'm the Rabi Collection assistant. How can I help you today?
        </div>
        <div class="chat-chips" id="chat-chips">
          <button class="chat-chip">Track Order</button>
          <button class="chat-chip">Return Policy</button>
          <button class="chat-chip">Payment Methods</button>
          <button class="chat-chip">Any Discounts?</button>
        </div>
      </div>
      <div class="chat-footer">
        <input type="text" class="chat-input" id="chat-input" placeholder="Type a message..." autocomplete="off">
        <button class="chat-send" id="chat-send">
          <!-- Send Icon SVG -->
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  `;

  // Inject into body
  document.body.insertAdjacentHTML('beforeend', chatHtml);

  // Logic bindings
  const chatBtn = document.getElementById('chat-btn');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatBody = document.getElementById('chat-body');

  function toggleChat() {
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      chatInput.focus();
    }
  }

  chatBtn.addEventListener('click', toggleChat);
  chatClose.addEventListener('click', toggleChat);

  function appendMessage(text, isUser) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-message');
    msgDiv.classList.add(isUser ? 'message-user' : 'message-bot');
    msgDiv.innerText = text;
    chatBody.appendChild(msgDiv);
    
    // Auto scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Pre-set questions logic
  const chatChips = document.querySelectorAll('.chat-chip');
  const chatChipsContainer = document.getElementById('chat-chips');
  
  chatChips.forEach(chip => {
    chip.addEventListener('click', () => {
      chatInput.value = chip.innerText;
      handleSend();
      // Hide chips after first use to keep chat clean
      chatChipsContainer.style.display = 'none';
    });
  });

  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    // User message
    appendMessage(text, true);
    chatInput.value = '';

    // Mock bot response
    setTimeout(() => {
      let botResponse = "I'm a demo bot! I don't have real answers connected yet, but thank you for reaching out.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('shipping') || lowerText.includes('delivery') || lowerText.includes('track')) {
        botResponse = "We offer free standard shipping on orders over ₹1500! Delivery generally takes 3-5 business days. You can track your order in the 'Orders' section.";
      } else if (lowerText.includes('return') || lowerText.includes('refund')) {
        botResponse = "You can return most items within 30 days of receipt. Visit your Orders page to start a return or request a refund.";
      } else if (lowerText.includes('hello') || lowerText.includes('hi')) {
        botResponse = "Hello! Looking for any specific recommendations today?";
      } else if (lowerText.includes('payment') || lowerText.includes('pay') || lowerText.includes('card')) {
        botResponse = "We accept all major Credit Cards, Debit Cards, UPI, Net Banking, and Cash on Delivery.";
      } else if (lowerText.includes('contact') || lowerText.includes('support') || lowerText.includes('human')) {
        botResponse = "You can reach our 24/7 human support team at support@rabicollection.com or call 1800-RABI-YES.";
      } else if (lowerText.includes('discount') || lowerText.includes('promo') || lowerText.includes('offer')) {
        botResponse = "We frequently run discount sales! Use the code 'WELCOME10' at checkout to get 10% off your first order.";
      } else if (lowerText.includes('international') || lowerText.includes('country') || lowerText.includes('abroad')) {
        botResponse = "Currently, we only ship across India. International shipping is planned for the near future!";
      } else if (lowerText.includes('cancel')) {
        botResponse = "Orders can be canceled any time before they are dispatched. Please visit the 'Orders' page to cancel an item.";
      }

      appendMessage(botResponse, false);
    }, 800);
  }

  chatSend.addEventListener('click', handleSend);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatWidget);
} else {
  initChatWidget();
}
