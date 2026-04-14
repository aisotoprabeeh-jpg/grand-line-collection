// State
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

// DOM Elements
const cartCount = document.getElementById('cart-count');
const productGrid = document.getElementById('product-grid');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  if (productGrid) {
    renderProducts(mockProducts);
  }
});

// Render Products
function renderProducts(productsToRender) {
  productGrid.innerHTML = productsToRender.map(product => `
    <div class="card product-card">
      <img src="${product.image}" alt="${product.title}" class="product-img">
      <a href="#" class="product-title">${product.title}</a>
      <div class="rating">
         ${getStars(product.rating)}
        <span class="rating-count">${product.reviews}</span>
      </div>
      <div class="price">
        <span class="currency">₹</span>${Math.floor(product.price)}<span class="currency">${(product.price % 1).toFixed(2).substring(1)}</span>
      </div>
      <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join('');
}

// Helper for Star Ratings
function getStars(rating) {
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHtml += '★';
    } else if (i - 0.5 <= rating) {
      starsHtml += '★'; // Half star logic could go here
    } else {
      starsHtml += '☆';
    }
  }
  return `<span style="color: var(--action-color); font-size: 1.1rem;">${starsHtml}</span>`;
}

// Cart Functionality
function addToCart(productId) {
  const product = mockProducts.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Simple visual feedback
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = 'Added!';
    btn.style.backgroundColor = 'var(--success-color)';
    btn.style.color = 'white';
    
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.backgroundColor = 'var(--accent-color)';
      btn.style.color = 'var(--text-main)';
    }, 1500);
  }
}

function updateCartCount() {
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

// Handle Search
const searchForm = document.getElementById('search-form');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = mockProducts.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
  });
}
