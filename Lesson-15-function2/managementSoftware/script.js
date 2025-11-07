// const h2 = document.createElement("h2");
// h2.textContent = 'Add Product';
// document.body.append(h2)

const products = ['Apple', 'Banana', 'Orange', 'Apple Iphone 17'];

function displayProduct() {
    let html = "<table>";
    for (let i = 0; i < products.length; i++) {
        html += `<tr style="${(i % 2 !== 0) ? 'background-color: lightgrey;':''}">
<td>${products[i]}</td>
<td><button type="button" onclick="editProduct(${i})">Edit</button></td>
<td><button type="button" onclick="deleteProduct(${i})">Delete</button></td>
</tr>`
    }
    html += "</table>";
    document.getElementById('tableList').innerHTML = html;
    document.getElementById('productTotal').innerHTML = 'Display Product (' + products.length + ')';
}

displayProduct();

const createProduct = () => {
    let productName = document.getElementById('productName').value;
    if (productName) {
        products.push(productName);
        displayProduct();
    } else {
        alert('Please enter a product name!')
    }
}

function editProduct(index) {
    products[index] = prompt('Enter Product Name:', products[index]);
    displayProduct();
}

function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        products.splice(index, 1);
        displayProduct();
    }
}