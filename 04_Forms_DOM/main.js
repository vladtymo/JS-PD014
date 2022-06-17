// -=-=-=-=-=- Product List -=-=-=-=-=-
const addBtn = document.getElementById("add-button");
const tableBody = document.getElementById("product-table-body");
const nameInput = document.getElementById("name-input");
const priceInput = document.getElementById("price-input");

let products = [];
let count = 0;

function clearList() {
    tableBody.innerHTML = "";
}
function addProductToList(product) {
    tableBody.innerHTML += `<tr class="table-active"><th scope="row">${product.id}</th><td>${product.name}</td><td>${product.price}$</td></tr>`;
}

addBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const price = priceInput.value;

    let product = {
        id: ++count,
        name: name,
        price: price
    }

    products.push(product);
    addProductToList(product);
});

// -=-=-=-=-=- Product Filters -=-=-=-=-=-
const filterBtn = document.getElementById("filter-button");
const clearFilterBtn = document.getElementById("clear-filters-button");

filterBtn.addEventListener('click', () => {
    clearList();
    products.filter(p => p.price >= 1000).forEach(p => addProductToList(p));
})
clearFilterBtn.addEventListener('click', () => {
    clearList();
    products.forEach(p => addProductToList(p));
});