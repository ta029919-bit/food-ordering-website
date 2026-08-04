// Food Items Dataset
const foodItems = [
    // --- BURGERS ---
    { id: 1, name: "Cheese Zinger Burger", category: "burger", originalPrice: 650, price: 550, image: "zinger.jpg", popular: true },
    { id: 2, name: "Beef Burger with Bacon", category: "burger", originalPrice: 850, price: 720, image: "bacon.jpg", popular: true },
    { id: 3, name: "Double Zinger Burger", category: "burger", originalPrice: 990, price: 840, image: "doublezinger.jpg", popular: true },
    { id: 4, name: "Crispy Patty Burger", category: "burger", originalPrice: 450, price: 380, image: "patty.jpg", popular: false },
    { id: 5, name: "Double Smash Burger", category: "burger", originalPrice: 890, price: 750, image: "smash.jpg", popular: true },
    { id: 6, name: "Thick Beef Mushroom Burger", category: "burger", originalPrice: 950, price: 800, image: "mushroom.jpg", popular: false },
    { id: 7, name: "Double Cheese Dream Burger", category: "burger", originalPrice: 1050, price: 890, image: "dream.jpg", popular: true },

    // --- FRIES & STARTERS ---
    { id: 8, name: "Crispy Plain Fries", category: "fries", originalPrice: 300, price: 250, image: "plainfries.jpg", popular: false },
    { id: 9, name: "Loaded Cheese Fries", category: "fries", originalPrice: 550, price: 460, image: "loaded.jpg", popular: true },
    { id: 10, name: "Hot & Crispy Wings (6 Pcs)", category: "fries", originalPrice: 600, price: 510, image: "wings.jpg", popular: true },
    { id: 11, name: "Crispy Chicken Tenders", category: "fries", originalPrice: 650, price: 550, image: "tenders.jpg", popular: false },

    // --- PIZZAS ---
    { id: 12, name: "Cheesy Margherita Pizza", category: "pizza", originalPrice: 1200, price: 1020, image: "margherita.jpg", popular: false },
    { id: 13, name: "Pepperoni Passion Pizza", category: "pizza", originalPrice: 1400, price: 1190, image: "pepperoni.jpg", popular: true },
    { id: 14, name: "BBQ Chicken Feast Pizza", category: "pizza", originalPrice: 1500, price: 1270, image: "bbqpizza.jpg", popular: true },
    { id: 15, name: "Veggie Supreme Pizza", category: "pizza", originalPrice: 1100, price: 935, image: "veggie.jpg", popular: false },

    // --- DESSERTS & SHAKES ---
    { id: 16, name: "Chocolate Strawberry Delight", category: "desserts", originalPrice: 600, price: 500, image: "strawberry.jpg", popular: true },
    { id: 17, name: "Chocolate Cake with Strawberry", category: "desserts", originalPrice: 700, price: 590, image: "cake.jpg", popular: true },
    { id: 18, name: "Molten Lava Cake", category: "desserts", originalPrice: 650, price: 550, image: "lava.jpg", popular: true },
    { id: 19, name: "Belgian Chocolate Waffles", category: "desserts", originalPrice: 600, price: 500, image: "waffles.jpg", popular: false },
    { id: 20, name: "Fudgy Chocolate Brownie", category: "desserts", originalPrice: 400, price: 340, image: "brownie.jpg", popular: false },
    { id: 21, name: "Premium Scoop Ice Cream", category: "desserts", originalPrice: 350, price: 290, image: "icecream.jpg", popular: true, hasFlavors: true },
    { id: 22, name: "Rich Chocolate Shake", category: "desserts", originalPrice: 450, price: 380, image: "chocoshake.jpg", popular: true },
    { id: 23, name: "Fresh Strawberry Shake", category: "desserts", originalPrice: 450, price: 380, image: "strawshake.jpg", popular: false },

    // --- DRINKS ---
    { id: 24, name: "Coca Cola (Can)", category: "drinks", originalPrice: 150, price: 120, image: "coke.jpg", popular: false },
    { id: 25, name: "Fresh Mint Lemonade", category: "drinks", originalPrice: 250, price: 210, image: "lemonade.jpg", popular: true },
    { id: 26, name: "Sprite (Can)", category: "drinks", originalPrice: 150, price: 120, image: "sprite.jpg", popular: false },
    { id: 27, name: "Blue Mojito Special", category: "drinks", originalPrice: 350, price: 290, image: "bluemojito.jpg", popular: true },
    { id: 28, name: "Halloween Special Cocktail", category: "drinks", originalPrice: 400, price: 340, image: "cocktail.jpg", popular: true }
];

// EXCLUSIVE AZADI DEALS
const azadiDeals = [
    { id: 101, name: "Azadi Deal 1", desc: "1 Zinger Burger + 1 Plain Fries + 1 Coke", price: 799, originalPrice: 1100, image: "deal1.jpg" },
    { id: 102, name: "Azadi Deal 2", desc: "2 Beef Burgers + Loaded Fries + 2 Drinks", price: 1599, originalPrice: 2100, image: "deal2.jpg" },
    { id: 103, name: "Azadi Deal 3", desc: "1 Large Pizza + 6 Crispy Wings + 1.5L Coke", price: 1899, originalPrice: 2400, image: "deal3.jpg" },
    { id: 104, name: "Azadi Deal 4", desc: "2 Double Zinger Burgers + 2 Blue Mojitos", price: 1999, originalPrice: 2600, image: "deal4.jpg" },
    { id: 105, name: "Azadi Deal 5", desc: "1 Double Smash Burger + Chicken Tenders + Shake", price: 1399, originalPrice: 1800, image: "deal5.jpg" },
    { id: 106, name: "Azadi Deal 6", desc: "1 Margherita Pizza + Loaded Cheese Fries", price: 1349, originalPrice: 1750, image: "deal6.jpg" },
    { id: 107, name: "Azadi Mega Feast", desc: "4 Zingers + 2 Fries + 4 Drinks (Family Pack)", price: 2899, originalPrice: 3800, image: "deal7.jpg" }
];

// REVIEWS
const customerReviews = [
    { name: "Ali Raza", comment: "Best Zinger burger in Lahore! The 15% Azadi discount was a great bonus.", rating: "★★★★★" },
    { name: "Fatima Zahra", comment: "Loaded fries were super crispy and warm. Delivery was totally free on 1st order!", rating: "★★★★★" },
    { name: "Hamza Sheikh", comment: "Blue Mojito & Double Smash Burger is a deadly combination. Recommended!", rating: "★★★★★" },
    { name: "Sana Tariq", comment: "Amazing website design and fast service. Food arrived in 25 mins.", rating: "★★★★★" },
    { name: "Bilal Hassan", comment: "Azadi Deal 3 is absolute value for money. Pizza was loaded with cheese.", rating: "★★★★★" },
    { name: "Zainab Malik", comment: "Staff is very polite and professional. Great hygiene standards.", rating: "★★★★★" },
    { name: "Usman Ghani", comment: "Molten Lava Cake and Waffles were so delicious! Must try.", rating: "★★★★★" },
    { name: "Ayesha Imran", comment: "Loved the Buzz Restaurant theme! Very smooth online ordering experience.", rating: "★★★★★" },
    { name: "Omer Farooq", comment: "The pepperoni pizza base was so fresh and authentic. 10/10!", rating: "★★★★★" },
    { name: "Nida Yasir", comment: "Chocolate Shake and Brownies are divine! Loved the prompt delivery.", rating: "★★★★★" }
];

let cart = JSON.parse(localStorage.getItem('buzz_cart_pkr')) || [];
let appliedPromoDiscount = 0;

// Screen Transitions
document.getElementById('btn-goto-login').addEventListener('click', () => {
    document.getElementById('video-intro-screen').style.display = 'none';
    document.getElementById('login-page-screen').style.display = 'flex';
});

document.getElementById('initial-login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('login-page-screen').style.display = 'none';
    document.getElementById('main-app-content').style.display = 'block';
});

document.getElementById('logout-btn').addEventListener('click', () => {
    document.getElementById('main-app-content').style.display = 'none';
    document.getElementById('login-page-screen').style.display = 'flex';
});

// FORGOT PASSWORD MODAL & VALIDATION LOGIC
const resetModal = document.getElementById('reset-password-modal');
document.getElementById('open-forgot-modal').onclick = (e) => {
    e.preventDefault();
    resetModal.style.display = 'flex';
};

document.getElementById('reset-password-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newPass = document.getElementById('new-password-input').value;
    const confirmPass = document.getElementById('confirm-password-input').value;
    const errorBox = document.getElementById('password-error-msg');

    errorBox.style.display = 'none';

    // Regex Check: 8+ Chars, 1 Upper, 1 Lower, 1 Number, 1 Special Char
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (newPass !== confirmPass) {
        errorBox.innerText = "❌ Passwords do not match!";
        errorBox.style.display = 'block';
        return;
    }

    if (!strongRegex.test(newPass)) {
        errorBox.innerText = "❌ Password does not meet strong security requirements!";
        errorBox.style.display = 'block';
        return;
    }

    alert('✅ Password updated successfully! You can now log in.');
    resetModal.style.display = 'none';
    e.target.reset();
});

// Startup
document.addEventListener('DOMContentLoaded', () => {
    renderDeals();
    renderFoodItems(foodItems);
    renderReviews();
    updateCartUI();
});

function renderDeals() {
    const container = document.getElementById('deals-grid');
    container.innerHTML = '';
    azadiDeals.forEach(deal => {
        container.innerHTML += `
            <div class="food-card">
                <span class="badge-discount">AZADI DEAL</span>
                <img src="${deal.image}" alt="${deal.name}">
                <div class="food-card-info">
                    <h3>${deal.name}</h3>
                    <p style="font-size: 0.8rem; color: #777; margin: 4px 0;">${deal.desc}</p>
                    <div class="food-card-bottom">
                        <div>
                            <span class="price-strike">Rs. ${deal.originalPrice}</span>
                            <span class="price">Rs. ${deal.price}</span>
                        </div>
                        <button class="btn btn-primary" id="btn-deal-${deal.id}" onclick="addDealToCart(${deal.id})">+ Add Deal</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderFoodItems(items) {
    const foodGrid = document.getElementById('food-grid');
    foodGrid.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            ${item.popular ? '<span class="badge-popular">🔥 Popular</span>' : ''}
            <span class="badge-discount">15% OFF</span>
            <img src="${item.image}" alt="${item.name}">
            <div class="food-card-info">
                <h3>${item.name}</h3>
                ${item.hasFlavors ? `
                    <select id="flavor-select-${item.id}" class="flavor-select">
                        <option value="Vanilla">Vanilla Flavor</option>
                        <option value="Chocolate">Chocolate Flavor</option>
                        <option value="Strawberry">Strawberry Flavor</option>
                        <option value="Mango">Mango Flavor</option>
                        <option value="Pistachio">Pistachio Flavor</option>
                        <option value="Cookies & Cream">Cookies & Cream</option>
                    </select>
                ` : ''}
                <div class="food-card-bottom">
                    <div>
                        <span class="price-strike">Rs. ${item.originalPrice}</span>
                        <span class="price">Rs. ${item.price}</span>
                    </div>
                    <button class="btn btn-primary" id="btn-item-${item.id}" onclick="addToCart(${item.id})">+ Add</button>
                </div>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    grid.innerHTML = '';
    customerReviews.forEach(r => {
        grid.innerHTML += `
            <div class="review-card">
                <div class="stars">${r.rating}</div>
                <p>"${r.comment}"</p>
                <div class="review-author">- ${r.name}</div>
            </div>
        `;
    });
}

// Search & Categories
document.getElementById('search-input').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    renderFoodItems(foodItems.filter(i => i.name.toLowerCase().includes(val)));
});

document.querySelectorAll('.category-card').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category;
        renderFoodItems(cat === 'all' ? foodItems : foodItems.filter(i => i.category === cat));
    });
});

// Cart Logic
function addToCart(id) {
    const item = foodItems.find(i => i.id === id);
    let itemToAdd = { ...item };
    
    if(item.hasFlavors) {
        const selectedFlavor = document.getElementById(`flavor-select-${id}`).value;
        itemToAdd.name = `${item.name} (${selectedFlavor})`;
    }

    pushToCart(itemToAdd);
    
    const btn = document.getElementById(`btn-item-${id}`);
    if(btn) {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
        btn.classList.add('added-btn');
        setTimeout(() => { btn.innerHTML = '+ Add'; btn.classList.remove('added-btn'); }, 1500);
    }
}

function addDealToCart(id) {
    const deal = azadiDeals.find(d => d.id === id);
    pushToCart(deal);

    const btn = document.getElementById(`btn-deal-${id}`);
    if(btn) {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
        btn.classList.add('added-btn');
        setTimeout(() => { btn.innerHTML = '+ Add Deal'; btn.classList.remove('added-btn'); }, 1500);
    }
}

function pushToCart(item) {
    const existing = cart.find(i => i.name === item.name);
    if (existing) existing.quantity += 1;
    else cart.push({ ...item, quantity: 1 });
    
    saveCart();
    updateCartUI();
    document.getElementById('cart-overlay').style.display = 'flex';
}

function changeQty(name, delta) {
    const item = cart.find(i => i.name === name);
    if(item) {
        item.quantity += delta;
        if(item.quantity <= 0) cart = cart.filter(i => i.name !== name);
    }
    saveCart();
    updateCartUI();
}

function saveCart() { localStorage.setItem('buzz_cart_pkr', JSON.stringify(cart)); }

function updateCartUI() {
    const count = cart.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
    const azadiDiscount = Math.round(subtotal * 0.15);
    const total = subtotal - azadiDiscount - appliedPromoDiscount;

    document.getElementById('cart-count').innerText = count;
    document.getElementById('cart-drawer-count').innerText = count;
    document.getElementById('subtotal-price').innerText = `Rs. ${subtotal}`;
    document.getElementById('discount-price').innerText = `- Rs. ${azadiDiscount}`;
    document.getElementById('cart-total-price').innerText = `Rs. ${Math.max(0, total)}`;

    const container = document.getElementById('cart-items');
    container.innerHTML = '';
    
    if(!cart.length) {
        container.innerHTML = '<p style="text-align:center; color:#888; margin-top:2rem;">Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div style="flex:1">
                    <h4 style="font-size:0.9rem;">${item.name}</h4>
                    <p class="price" style="font-size:0.85rem;">Rs. ${item.price * item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <button onclick="changeQty('${item.name}', -1)">-</button>
                    <span style="margin: 0 6px; font-weight:bold;">${item.quantity}</span>
                    <button onclick="changeQty('${item.name}', 1)">+</button>
                </div>
            </div>
        `;
    });
}

// Promo Code Logic
document.getElementById('apply-promo-btn').onclick = () => {
    const code = document.getElementById('promo-code-input').value.trim().toUpperCase();
    const msg = document.getElementById('promo-message');
    const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

    if (code === "AZADI15" || code === "BUZZ20") {
        appliedPromoDiscount = Math.round(subtotal * 0.15);
        msg.style.color = "#2ed573";
        msg.innerText = "✅ Promo code applied! Extra 15% OFF";
        document.getElementById('promo-discount-line').style.display = 'flex';
        document.getElementById('promo-discount-price').innerText = `- Rs. ${appliedPromoDiscount}`;
        updateCartUI();
    } else {
        msg.style.color = "#ff4757";
        msg.innerText = "❌ Invalid Promo Code!";
    }
};

// Modals
document.getElementById('cart-btn').onclick = () => document.getElementById('cart-overlay').style.display = 'flex';
document.getElementById('close-cart').onclick = () => document.getElementById('cart-overlay').style.display = 'none';

document.getElementById('proceed-checkout-btn').onclick = () => {
    if(!cart.length) return alert('Your cart is empty!');
    document.getElementById('cart-overlay').style.display = 'none';
    document.getElementById('checkout-modal').style.display = 'flex';
};

document.querySelectorAll('.modal-close').forEach(b => {
    b.onclick = () => document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
});

// Checkout & Order Tracking
document.getElementById('checkout-form').onsubmit = (e) => {
    e.preventDefault();
    document.getElementById('checkout-modal').style.display = 'none';
    document.getElementById('tracking-modal').style.display = 'flex';
    
    setTimeout(() => { document.getElementById('step-2').classList.add('active'); }, 3000);
    setTimeout(() => { document.getElementById('step-3').classList.add('active'); }, 7000);

    cart = [];
    appliedPromoDiscount = 0;
    saveCart();
    updateCartUI();
};

document.getElementById('contact-form').onsubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting BUZZ RESTAURANT! We will get back to you shortly.');
    e.target.reset();
};

// Theme Toggle Script
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-sun';
    }
});

const topBtn = document.getElementById('scroll-top-btn');
window.onscroll = () => topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });