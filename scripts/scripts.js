// Contenedor
const productsContainer = document.getElementById('productsContainer');



// Contenedor del carrito
const cartContainer = document.getElementById('cart-container');



// Productos
let productStock = [
    {id: 1, name: "Almendras", type: "Fruto seco", price: 460, amount: "100g", img: "https://www.pngmart.com/files/13/Almond-Nut-Transparent-PNG.png"},
    {id: 2, name: "Maní", type: "Fruto seco", price: 460, amount: "100g", img: "https://www.pngmart.com/files/7/Peanut-PNG-Clipart.png"},
    {id: 3, name: "Castañas de Cajú", type: "Fruto seco", price: 490, amount: "100g", img: "https://snipstock.com/assets/cdn/png/6ef910a37a868787d954f8207318ec95.png"},
    {id: 4, name: "Pistachos", type: "Fruto seco", price: 470, amount: "100g", img: "https://www.pngall.com/wp-content/uploads/2016/06/Pistachio-PNG-File-1.png"},
    {id: 5, name: "Nueces", type: "Fruto seco", price: 470, amount: "100g", img: "https://www.pngkey.com/png/full/317-3177722_walnuts-kilogram.png"},
    {id: 6, name: "Avellanas", type: "Fruto seco", price: 460, amount: "100g", img: "https://us.123rf.com/450wm/dionisvera/dionisvera1405/dionisvera140500016/28016538-kernel-avellanas.jpg?ver=6"},
    {id: 7, name: "Semillas de girasol", type: "Fruto seco", price: 400, amount: "100g", img: "https://www.driedfruitforafrica.co.za/wp-content/uploads/2020/04/Sunflower-seeds.png"},
    {id: 8, name: "Leche de almendras Pampa Vida", type: "Bebida", price: 490, amount: "1L", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo11-95bf80191f8fabe14f16171229296141-480-0.jpg"},
    {id: 9, name: "Jugo de arándanos El Bolson", type: "Bebida", price: 300, amount: "1L", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/bolson-tetra-21-613a152577e686a9a915720651252678-480-0.jpg"},
    {id: 10, name: "Infusiones Adelgafruta", type: "Infusión", price: 430, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo1-d52e8dcc2d12fcee4715992485274993-480-0.jpg"},
    {id: 11, name: "Matcha organikal saborizados", type: "Infusión", price: 940, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo-saborizados1-a39c3bd03040e8a91215720700218192-480-0.jpg"},
    {id: 12, name: "Infusiones Saintgottard", type: "Infusión", price: 530, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo-grande-jpg1-4aca10f607c248e4c415720722780210-480-0.jpg"},
    {id: 13, name: "Té del burro (Burrito)", type: "Infusión", price: 325, amount: "100g", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/burrito1-5adf14d065e662de4715720668228960-480-0.jpg"},
    {id: 14, name: "Yerba mate Oasis", type: "Infusión", price: 760, amount: "500g", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/yerba-organica-nueva1-b07e7eb197c89b993315798077593843-480-0.jpg"},
    {id: 15, name: "Leche de soja El naturalista", type: "Infusión", price: 620, amount: "500g", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/leche-de-soja-combo1-29f946b141bbb01a5e15720659358191-480-0.jpg"},
    {id: 16, name: "Jabón vegetal Botanika", type: "Cosmética", price: 700, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo31-4f412fd749fe2f5d7015721190900910-480-0.jpg"},
    {id: 17, name: "Shampoo sin sulfatos Frenzzi", type: "Cosmética", price: 2580, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/shampoo-nuevo1-1c4e7583faea418c8315722239577604-480-0.jpg"},
    {id: 18, name: "Desodorantes Roll Botanika", type: "Cosmética", price: 750, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo21-762079a99c9676e13615721183462025-480-0.jpg"},
    {id: 19, name: "Pasta dental Sudanta", type: "Cosmética", price: 720, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo41-a113af198ec7a811fa15721206426626-480-0.jpg"},
    {id: 20, name: "Crema de peinar Frenzzi", type: "Cosmética", price: 870, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/cremas-peinar11-9c40558e653f0c03c016482125709041-480-0.jpg"},
    {id: 21, name: "Exfoliante corporal Veganis", type: "Cosmética", price: 1570, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/exfoliante1-6c2fd8e3586faa894b15721377074181-480-0.jpg"},
    {id: 22, name: "Acondicionadores Frenzzi", type: "Cosmética", price: 1400, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/acondicionadores11-064b536021317b203b16482130044624-480-0.jpg"},
    {id: 23, name: "Jabones vegetales SriSri", type: "Cosmética", price: 1470, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/combo-jabones-sri-sri1-287dfc19bd73b902fe15721213875431-480-0.jpg"},
    {id: 24, name: "Chlorella orgánica HGL", type: "Suplementos", price: 1230, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/chlorella-grs1-f99870f13051a107bb15722476496897-480-0.jpeg"},
    {id: 25, name: "Aloe Vera Jual", type: "Suplementos", price: 650, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/jual-combo1-e1c4a8072e065292e115722513787489-480-0.jpg"},
    {id: 26, name: "Maca", type: "Suplementos", price: 140, amount: "100g", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/maca-50g4-ead2e3a92cb62d91f715716232403156-480-0.jpg"},
    {id: 27, name: "Psylium en polvo", type: "Suplementos", price: 940, amount: "100gr", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/psyllium-en-polvo-100g4-37c2a461645c2c028915716232877492-480-0.jpg"},
    {id: 28, name: "Cacao orgánico premium HGL", type: "Suplementos", price: 480, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/cacao-polvo1-86e49f45a691c8309015716903438841-480-0.jpg"},
    {id: 29, name: "Multivitamínico Vitamin Way", type: "Suplementos", price: 1350, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/multi-30-11-bf602f702764c7c0e115722472835341-480-0.jpg"},
    {id: 30, name: "Clara de huevo en polvo", type: "Suplementos", price: 990, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/clara-de-huevo-en-polvo-colabella4-a659dd789f928042e715716231533460-480-0.jpg"},
    {id: 31, name: "Jengibre orgánico HGL", type: "Suplementos", price: 540, amount: "1", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/040/363/products/jengibre-en-polvo1-18bc7f6b63c9732e1715722460867069-480-0.jpg"}
];



// Contador de productos en el carrito
const cartCount = document.getElementById('cart-count');



// Precio total
const totalPrice = document.getElementById('total-price');



// Carrito
let cart = [];



// Obtener datos del Local Storage
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
        <div id="${product.id}" class="product__info">
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



// Ventana modal del carrito
// ===================================================================================================================
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});



// Buscador
// ===================================================================================================================
document.addEventListener("keyup", e => {
    if (e.target.matches("#search")) {
        document.querySelectorAll(".product").forEach(product => {
            product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? product.classList.remove("filter")
            : product.classList.add("filter");
        });
    };
});