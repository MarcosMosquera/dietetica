// Contenedor
const productsContainer = document.getElementById('productsContainer');

// Contenedor del carrito
const cartContainer = document.getElementById('cart-container');

// Productos
let productStock = [
    {id: 1, name: "Almendras", type: "Fruto seco", price: 460, amount: "100g", img: "images/almonds.png"},
    {id: 2, name: "Maní", type: "Fruto seco", price: 460, amount: "100g", img: "images/peanuts.png"},
    {id: 3, name: "Castañas de Cajú", type: "Fruto seco", price: 490, amount: "100g", img: "images/cashew.png"},
    {id: 4, name: "Pistachos", type: "Fruto seco", price: 470, amount: "100g", img: "images/pistachios.png"}
];

// Contador de productos en el carrito
const cartCount = document.getElementById('cart-count');

// Precio total
const totalPrice = document.getElementById('total-price');

// Carrito
let cart = [];

// Obtener datod del Local Storage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        cartRefresh();
    };
});


// Función para añadir productos al HTML
// ===================================================================================================================
productStock?.forEach((product) => {
    // Creo un div
    const div = document.createElement('div');
    // Al div le agrego un class existente
    div.classList.add('product');
    div.setAttribute('data-aos', 'fade-up');
    // Inyecto HTML
    div.innerHTML = `
        <div class="product__img-container">
            <img class="product__img" src="${product.img}" alt="">
        </div>
        <div class="product__info">
            <h3 class="product__title">${product.name}</h3>
            <p class="product__price">$ ${product.price}</p>
            <button id="add${product.id}" class="add-button">Agregar al carrito</button>
        </div>
    `;
    // Se lo añado al elemento padre
    productsContainer?.appendChild(div);

    // Botón
    const button = document.getElementById(`add${product.id}`);
    // Función al hacer click sobre el botón
    button.addEventListener('click', () => {
        addToCart(product.id);
    });
});


// Función para añadir productos al carrito
// ===================================================================================================================
const addToCart = (prodId) => {
    // Trae el producto con la ID que coincida con el prodId que reciba por parámetro
    const item = productStock?.find((product) => product.id === prodId);
    // Añade item al array del carrito
    cart.push(item);
    cartRefresh();
};


// Función para eliminar productos del carrito
// ===================================================================================================================
const deleteFromCart = (prodId) => {
    // Trae el producto con la ID que coincida con el prodId que reciba por parámetro
    const item = cart.find((product) => product.id === prodId);
    // Encontrar índice del producto a eliminar
    const index = cart.indexOf(item);
    // Elimina el producto a partir del índice
    cart.splice(index, 1);
    
    cartRefresh();
};


// Función para actualizar el carrito
// ===================================================================================================================
const cartRefresh = () => {
    // Para que no se acumulen grupos de productos, primero vaciará el array
    cartContainer.innerHTML = "";

    cart.forEach((product) => {
        const div = document.createElement('div');
        div.className = ('product-in-cart');
        div.innerHTML = `
            <p>${product?.name}</p>
            <p>$ ${product?.price}</p>
            <p>Cantidad: <span id="amount">${product?.amount}</span></p>
            <button class="delete-btn" onclick="deleteFromCart(${product?.id})">Eliminar</button>
        `;
        cartContainer.appendChild(div);

        // Setear en Local Storage
        localStorage.setItem('cart', JSON.stringify(cart));

    });
    // Igualar contador de productos a la cantidad de productos que tiene el carrito
    cartCount.innerText = cart.length;

    totalPrice.innerText = cart.reduce((acc, product) => acc + product.price, 0);
};