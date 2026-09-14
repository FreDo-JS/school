const products = [
  {
    id: 1,
    name: "IPhone 16",
    price: 3999.99,
    img: "iphone.jpg",
  },
  {
    id: 2,
    name: "AirPods Pro 3",
    price: 1399,
    img: "airpodsy.jpg",
  },
  {
    id: 3,
    name: "Monitor Lenovo Legion",
    price: 2050.5,
    img: "monitor.jpg",
  },
  {
    id: 4,
    name: "Apple Airtag",
    price: 200.99,
    img: "airtag.jpg",
  },
];

const container = document.querySelector(".product-container");
console.log(products);

products.forEach((product) => {
  container.innerHTML += `
 <div class='card-product'>
 <img src=${product.img} />
 <p>${product.name}</p>
 <p class='price'>${product.price}</p>
 <button onclick="addToCart(${product.id})">Dodaj do koszyka</button
 </div>
 `;
});

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find((product) => product.id === productId);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
}
