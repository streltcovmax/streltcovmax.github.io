let prod1 = document.getElementById("prod1");
let prod2 = document.getElementById("prod2");
let prod3 = document.getElementById("prod3");
let selection = document.getElementById("selection");
let option = document.getElementById("option");
let check = document.getElementById("check");
let result = document.getElementById("result");
let amountField = document.getElementById("amount");
let selectedProduct = prod1;

prod1.addEventListener("click", function () {
    selection.className = "invisible";
    option.className = "invisible";
    check.checked = false;
    selectedProduct = prod1;
    resetResult();
});
prod2.addEventListener("click", function () {
    selection.className = "visible";
    option.className = "invisible";
    check.checked = false;
    selectedProduct = prod2;
    resetResult();
});
prod3.addEventListener("click", function () {
    selection.className = "invisible";
    option.className = "visible";
    check.checked = false;
    selectedProduct = prod3;
    resetResult();
});


function calculatePrice() {
    let amount = document.getElementById("amount").value;
    let price = getProductPrice(selectedProduct.value);

    if (!Number.isNaN(amount)) {
        let parsedAmount = parseFloat(amount);
        if (Number.isInteger(parsedAmount)) {
            let cost = price;
            if (check.checked) {
                cost += 50;
            }
            if (selection.className !== "invisible") {
                cost += getSelectPrice(selection.value);
            }
            cost *= parsedAmount;
            result.textContent = "ИТОГО: " + cost + " руб";
        }
    } else {
        document.getElementById("result").textContent =
        "Кол-во товара введено некорректно";
    }
}


function getProductPrice(productName) {
    switch (productName) {
    case "Товар1":
        return 100;
    case "Товар2":
        return 50;
    case "Товар3":
        return 20;
    default:
        return 0;
    }
}

function getSelectPrice(selName) {
    switch (selName) {
    case "Опция1":
        return 10;
    case "Опция2":
        return 50;
    }
}

function resetResult() {
    result.textContent = "ИТОГО: ";
}