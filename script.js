const products = [
    {
        id: 1,
        title: 'Wikusia',
        price: 999.99,
        imageUrl: 'wikusia.jpg',
        description: 'Wikusia to s³odki cz³owiek którego warto kupiæ.'
    },
    {
        id: 2,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 3,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 4,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 5,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 6,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 7,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 8,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 9,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 10,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 11,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 12,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    {
        id: 13,
        title: 'Zuza',
        price: 499.99,
        imageUrl: 'zuza.png',
        description: 'dupa'
    },
    
];

const productGrid = document.getElementById('product-grid');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

const addToCart = (product) => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${product.title} - $${product.price.toFixed(2)}`;
    cartItems.appendChild(cartItem);

    updateCartTotal(product.price);
};

const updateCartTotal = (price) => {
    const currentTotal = parseFloat(cartTotal.textContent.replace('Suma: $', ''));
    const newTotal = currentTotal + price;
    cartTotal.textContent = `Suma: $${newTotal.toFixed(2)}`;
};

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.classList.add('fadeIn'); // Dodajemy animacjê fadeIn

    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productImage.alt = product.title;
    productImage.classList.add('product-image');

    const productTitle = document.createElement('h2');
    productTitle.textContent = product.title;
    productTitle.classList.add('product-title');

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productPrice.classList.add('product-price');

    const productLink = document.createElement('a');
    productLink.href = `product.html?id=${product.id}`;
    productLink.appendChild(productImage);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Dodaj do koszyka';
    addToCartButton.classList.add('button'); // Dodajemy klasê przycisku
    addToCartButton.addEventListener('click', () => {
        addToCart(product);
    });

    productCard.appendChild(productLink);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);
    productCard.appendChild(addToCartButton);

    productGrid.appendChild(productCard);
});
