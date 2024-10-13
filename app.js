const products = [
  { id: 1, name: "Product 1", price: 200 },
  { id: 2, name: "Product 2", price: 300 },
  { id: 3, name: "Product 3", price: 500 },
];

let cart = [];

function displayProduct() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card");
    productCard.innerHTML = ` <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id == productId);
  cart.push(product);
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(cartItem);
  });
}

displayProduct();
