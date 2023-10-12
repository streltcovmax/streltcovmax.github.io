function calculatePrice() {
  let selectedProduct = document.getElementById("selection").value;
  let amount = document.getElementById("amount").value;
  let isNumber = /^[0-9]*(\.[0-9]+)?$/.test(amount);
  let price = getProductPrice(selectedProduct);

  if (isNumber) {
      let parsedAmount = parseFloat(amount);
      if (Number.isInteger(parsedAmount)) {
          let cost = price * parsedAmount;
          document.getElementById("result").textContent = cost + " руб";
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
      return 129;
  case "Товар4":
      return 49;
  case "Товар5":
      return 69;
  case "Товар6":
      return 115;
  case "Товар7":
      return 100;
  case "Товар8":
      return 70;

  default:
      return 0;
  }
}