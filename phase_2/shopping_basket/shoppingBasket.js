const CandyNew = require('./candy')

class ShoppingBasket {

  constructor() {
  this.items = []
  this.discount = 0
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
        totalPrice += item.getPrice();
    })
   return parseFloat((totalPrice - this.discount).toFixed(2))
  }

  addItem(item) {
    this.items.push(item)
  }

//   getCandies() {
//     return this.items
//   }
}

const skittles = new CandyNew('Skittles', 2.99);
const mars = new CandyNew('Mars', 4.99);
const basket = new ShoppingBasket();
basket.addItem(skittles);
basket.addItem(mars);
basket.applyDiscount(5);
console.log(basket.getTotalPrice());

module.exports = ShoppingBasket
