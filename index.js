var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
  }
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty.";
  }

  text = "In your cart, you have";
  for(let i = 0; i < cart.length; i++) {
    text += ` ${cart[i].itemName} bananas at $${cart[i].itemPrice}`;

    if (i != cart.length - 1) {
      text += ",";
    } else {
      text += ".";
    }
  }
  return text;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
