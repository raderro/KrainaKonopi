const products = [
    {
        id: 1,
        title: 'Amnesia Haze',
        price: 15.99,
        imageUrl: 'assets/amnesia-haze.png',
        description: 'Amnesia Haze osi�ga poziom THC rz�du 22%, przez co haj pojawia si� natychmiast i utrzymuje si� kilka godzin. Jej kwiaty zapewniaj� r�wnie� �redni poziom CBD, zapewniaj�c relaksuj�ce, niezamulaj�ce i terapeutyczne dzia�anie. Stymuluj�cy i umys�owy haj Amnesia Haze czyni j� �wietnym wyborem do palenia w ci�gu dnia.'
    },
    {
        id: 2,
        title: 'Purple Haze',
        price: 12.99,
        imageUrl: 'assets/purple-haze.png',
        description: 'Purple Haze to odmiana marihuany z dominacj� Sativy. Poziom THC oscyluje mi�dzy 18-23 %. Nasze nasiona Purple Haze to wynik skrzy�owania odmian Purple Kush i Haze. Nie wbije Ci� ona w fotel niczym Gorilla Glue, a wr�cz przeciwnie pobudzi do dzia�ania poprzez senny przyp�yw euforii.'
    },
    {
        id: 3,
        title: 'Amnesia Haze',
        price: 9.99,
        imageUrl: 'assets/lemon-haze.png',
        description: 'Purple Haze to odmiana marihuany z dominacj� Sativy. Poziom THC oscyluje mi�dzy 18-23 %. Nasze nasiona Purple Haze to wynik skrzy�owania odmian Purple Kush i Haze. Nie wbije Ci� ona w fotel niczym Gorilla Glue, a wr�cz przeciwnie pobudzi do dzia�ania poprzez senny przyp�yw euforii.'
    },
    {
        id: 4,
        title: 'White Diesel Haze',
        price: 10.99,
        imageUrl: 'assets/diesel-haze.png',
        description: 'White Diesel Haze Automatic to szybka sativa w wersji kwitn�cej automatycznie. Ro�liny nie s� za wysokie i o wiele szybsze ni� tradycyjne sativy, przy tym zachowuj� dosy� dobr� produkcj� top�w. White wyst�puje w nazwie poniewa� topy s� mocno pokryte kryszta�kami �ywicy, podobnie jak w White Widow.'
    },
    {
        id: 5,
        title: 'White Widow',
        price: 8.99,
        imageUrl: 'assets/white-widow.png',
        description: 'White Widow obfituje w mircen, kt�ry jest dobrym �rodkiem przeciwb�lowym i rozlu�niaj�cym, a tak�e wykorzystywanym w terapii neuropatii i nudno�ci. Ma bardzo dobre dzia�anie przeciwb�lowe, ale dzi�ki silnej naturze Indica jest tak�e �wietnym kompanem w wypoczynku.'
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
    productCard.classList.add('fadeIn');

    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productImage.alt = product.title;
    productImage.classList.add('product-image');

    const productTitle = document.createElement('h2');
    productTitle.textContent = product.title;
    productTitle.classList.add('product-title');

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2) + "/1g"}`;
    productPrice.classList.add('product-price');

    const productLink = document.createElement('a');
    productLink.href = `product.html?id=${product.id}`;
    productLink.appendChild(productImage);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Dodaj do koszyka';
    addToCartButton.classList.add('button'); 
    addToCartButton.addEventListener('click', () => {
        addToCart(product);
    });

    productCard.appendChild(productLink);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);
    productCard.appendChild(addToCartButton);

    productGrid.appendChild(productCard);
});

const checkoutButton = document.getElementById("checkout-button");

checkoutButton.addEventListener("click", () => {
    window.location.href = "platnosc.html"; // Przekierowanie do strony p�atno�ci
});