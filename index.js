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

  var text = "In your cart, you have";
  for(let i = 0; i < cart.length; i++) {
    if (i != 0 && i == cart.length - 1) {
      text += " and";
    }

    text += ` ${cart[i].itemName} at $${cart[i].itemPrice}`;

    if (i != cart.length - 1) {
      text += ",";
    } else {
      text += ".";
    }
  }
  return text;
}

function total() {
  var total = 0;

  for(let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }

  return total;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if (cart[i] !== undefined) {
      if (cart[i].itemName == item) {
        delete cart[i];
      } else {
        return "That item is not in your cart.";
      }
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == 0) {
    return "Sorry, we don't have a credit card on file for you.";
  }

  cart = [];
  var tot = total();
  return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
}
