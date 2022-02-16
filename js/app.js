function getElement(element) {
  return document.getElementById(element);
}
// selects elements
const nikePlusBtn = getElement("nike-plus-btn");
const nikeMinusBtn = getElement("nike-minus-btn");
const clothPlusBtn = getElement("cloth-btn-plus");
const clothMinusBtn = getElement("cloth-btn-minus");

const gucciPlusBtn = getElement("gucci-plus-btn");
const gucciMinusBtn = getElement("gucci-minus-btn");

// functionalites
const time = getElement("time");
function updateTime() {
  let date = new Date();
  time.innerText = date.toLocaleTimeString();
}
setInterval(updateTime, 1000);
// addEventlistener add
function updateProducts(inpuId, price, total, isIncrement) {
  const inputField = document.getElementById(inpuId);
  let inputValue = parseInt(inputField.value);
  if (isIncrement == true) {
    inputValue = inputValue + 1;
  } else if (inputValue > 0) {
    inputValue = inputValue - 1;
  }
  inputField.value = inputValue;
  const totalPrice = document.getElementById(total);
  totalPrice.innerText = price * inputValue;
  updateTotal();
}
// for nike products
nikePlusBtn.addEventListener("click", function () {
  updateProducts("nike-input", 2239, "nike-prices", true);
});

nikeMinusBtn.addEventListener("click", function () {
  updateProducts("nike-input", 2239, "nike-prices", false);
});
// for cloth producs

clothPlusBtn.addEventListener("click", function () {
  updateProducts("cloth-input", 1499, "cloth-prices", true);
});

clothMinusBtn.addEventListener("click", function () {
  updateProducts("cloth-input", 1499, "cloth-prices", false);
  console.log(LJd);
});

// for gucci
gucciPlusBtn.addEventListener("click", function () {
  updateProducts("gucci-input", 1850, "gucci-prices", true);
});
gucciMinusBtn.addEventListener("click", function () {
  updateProducts("gucci-input", 1850, "gucci-prices", false);
});
// total update

function updateTotal() {
  const nikeTotal = getElement("nike-prices").innerText;
  const clothTotal = getElement("cloth-prices").innerText;
  const gucciTotal = getElement("gucci-prices").innerText;
  const subTotal = getElement("sub-total");
  const shippinTotal = getElement("shipping");
  const grandTotal = getElement("total");
  // update the value

  const totalPrice =
    parseInt(nikeTotal) + parseInt(clothTotal) + parseInt(gucciTotal);
  subTotal.innerText = totalPrice;
  let shippingPrice = parseInt(totalPrice) * 0.2;
  shippinTotal.innerText = shippingPrice.toFixed(2);
  grandTotal.innerText = parseInt(totalPrice + shippingPrice);
}
