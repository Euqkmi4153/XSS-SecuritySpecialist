const products = [
    { no: 1, name: "商品1", price: 30000, quantity: 1 },
    { no: 2, name: "商品2", price: 7500, quantity: 1 },
    { no: 3, name: "商品3", price: 15000, quantity: 1 },
];


function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement("tr");


        row.innerHTML = `
                <td>${product.no}</td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}円</td>
                <td>${product.quantity}</td>
            `;

        cartItemsContainer.appendChild(row);
    });


    updateSummary();
}


function updateSummary() {
    const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const shippingFee = 0;
    const total = subtotal + shippingFee;

    document.getElementById("subtotal").textContent = `${subtotal.toLocaleString()}円`;
    document.getElementById("shipping-fee").textContent = `${shippingFee.toLocaleString()}円`;
    document.getElementById("total").textContent = `${total.toLocaleString()}円`;
}


function goBack() {
    alert("前のページに戻ります。");
}


function purchase(page) {
    alert("購入が完了しました。");
    location.href = page;
}


displayCartItems();
