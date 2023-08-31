const products = [
    {
        id: 1,
        title: 'Amnesia Haze',
        price: 15.99,
        imageUrl: 'assets/amnesia-haze.png',
        description: 'Amnesia Haze osi¹ga poziom THC rzêdu 22%, przez co haj pojawia siê natychmiast i utrzymuje siê kilka godzin. Jej kwiaty zapewniaj¹ równie¿ œredni poziom CBD, zapewniaj¹c relaksuj¹ce, niezamulaj¹ce i terapeutyczne dzia³anie. Stymuluj¹cy i umys³owy haj Amnesia Haze czyni j¹ œwietnym wyborem do palenia w ci¹gu dnia.'
    },
    {
        id: 2,
        title: 'Purple Haze',
        price: 12.99,
        imageUrl: 'assets/purple-haze.png',
        description: 'Purple Haze to odmiana marihuany z dominacj¹ Sativy. Poziom THC oscyluje miêdzy 18-23 %. Nasze nasiona Purple Haze to wynik skrzy¿owania odmian Purple Kush i Haze. Nie wbije Ciê ona w fotel niczym Gorilla Glue, a wrêcz przeciwnie pobudzi do dzia³ania poprzez senny przyp³yw euforii.'
    },
    {
        id: 3,
        title: 'Amnesia Haze',
        price: 9.99,
        imageUrl: 'assets/lemon-haze.png',
        description: 'Purple Haze to odmiana marihuany z dominacj¹ Sativy. Poziom THC oscyluje miêdzy 18-23 %. Nasze nasiona Purple Haze to wynik skrzy¿owania odmian Purple Kush i Haze. Nie wbije Ciê ona w fotel niczym Gorilla Glue, a wrêcz przeciwnie pobudzi do dzia³ania poprzez senny przyp³yw euforii.'
    },
    {
        id: 4,
        title: 'White Diesel Haze',
        price: 10.99,
        imageUrl: 'assets/diesel-haze.png',
        description: 'White Diesel Haze Automatic to szybka sativa w wersji kwitn¹cej automatycznie. Roœliny nie s¹ za wysokie i o wiele szybsze ni¿ tradycyjne sativy, przy tym zachowuj¹ dosyæ dobr¹ produkcjê topów. White wystêpuje w nazwie poniewa¿ topy s¹ mocno pokryte kryszta³kami ¿ywicy, podobnie jak w White Widow.'
    },
    {
        id: 5,
        title: 'White Widow',
        price: 8.99,
        imageUrl: 'assets/white-widow.png',
        description: 'White Widow obfituje w mircen, który jest dobrym œrodkiem przeciwbólowym i rozluŸniaj¹cym, a tak¿e wykorzystywanym w terapii neuropatii i nudnoœci. Ma bardzo dobre dzia³anie przeciwbólowe, ale dziêki silnej naturze Indica jest tak¿e œwietnym kompanem w wypoczynku.'
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
    window.location.href = "platnosc.html"; // Przekierowanie do strony p³atnoœci
});