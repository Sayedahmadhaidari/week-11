
// ==========================================
// Week 12 Homework
// Array Methods with Products
// ==========================================


// 1. Create an array of products

const products = [
  { name: "Laptop", price: 850, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 45, inStock: false },
  { name: "Monitor", price: 180, inStock: true },
  { name: "Headphones", price: 60, inStock: true },
  { name: "USB Drive", price: 15, inStock: false }
];


// 2. Get available product names
// Using filter() and map()

const availableProducts = products
  .filter(product => product.inStock === true)
  .map(product => product.name);


// 3. Calculate total inventory value
// Using reduce()

const totalInventoryValue = products
  .filter(product => product.inStock === true)
  .reduce((total, product) => total + product.price, 0);


// 4. Find the cheapest available product
// Using method chaining

const cheapestProduct = products
  .filter(product => product.inStock === true)
  .sort((a, b) => a.price - b.price)[0];


// 5. Display results in the console

console.log("===== AVAILABLE PRODUCTS =====");
console.log(availableProducts);

console.log("===== TOTAL INVENTORY VALUE =====");
console.log("$" + totalInventoryValue);

console.log("===== CHEAPEST PRODUCT =====");
console.log(cheapestProduct);


// 6. Select HTML elements

const totalProductsElement = document.querySelector("#totalProducts");
const availableProductsElement = document.querySelector("#availableProducts");
const inventoryValueElement = document.querySelector("#inventoryValue");
const productCountElement = document.querySelector("#productCount");
const productListElement = document.querySelector("#productList");
const availableListElement = document.querySelector("#availableList");
const cheapestProductElement = document.querySelector("#cheapestProduct");


// 7. Display statistics

totalProductsElement.textContent = products.length;
availableProductsElement.textContent = availableProducts.length;
inventoryValueElement.textContent = "$" + totalInventoryValue;
productCountElement.textContent = products.length + " Products";


// 8. Display all products in the table

productListElement.innerHTML = products.map(product => `
  <tr>
    <td>${product.name}</td>
    <td>$${product.price}</td>
    <td>
      <span class="status ${product.inStock ? "in-stock" : "out-stock"}">
        ${product.inStock ? "In Stock" : "Out of Stock"}
      </span>
    </td>
  </tr>
`).join("");


// 9. Display available product names

availableListElement.innerHTML = availableProducts.map(name => `
  <li>${name}</li>
`).join("");


// 10. Display the cheapest available product

cheapestProductElement.innerHTML = `
  <h3>${cheapestProduct.name}</h3>
  <p>This is the cheapest product currently available in stock.</p>
  <span class="cheapest-price">$${cheapestProduct.price}</span>
`;
