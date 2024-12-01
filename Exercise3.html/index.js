const products = ["Хлеб", "Молоко", "Яблоки"];

const productList = document.getElementById('product-list');
const addProductButton = document.getElementById('add-product');
function displayProducts() {
    productList.innerHTML = '';
    products.sort(); 
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        productList.appendChild(li);
    });
}

addProductButton.addEventListener('click', () => {
    const newProduct = prompt("Введите название товара:");
    if (!newProduct) {
        alert("Название товара не введено!");
        return;
    }
    products.push(newProduct.trim()); 
    displayProducts(); 
});

displayProducts();
