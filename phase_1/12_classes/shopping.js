class Candy {
    constructor(candyName, price) {
        this.candyName = candyName;
        this.price = price;
 }

    getName() {
        return this.candyName;
    }

    getPrice() {
        return this.price;
    }
}

class ShoppingBasket {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.items.forEach((item) => {
            totalPrice += item.price;
        })
        return totalPrice;
    }
}

const candy = new Candy('Mars', 4.99);

console.log(candy.getName());
console.log(candy.getPrice());

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice());

basket.addItem(candy);

console.log(basket.getTotalPrice());

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.getTotalPrice());
