class ProductProperties {
    static classProperties = [];

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
            }

    getTotalValue() {
        return this.quantity * this.price;
    }

    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
    }

    static applyDiscount(products, discount){
    products.forEach(product => {
            product.price -= product.price * discount;
        });
}
}


class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration date: ${this.expirationDate}`
    }

}

class PropertiesInventory {
    constructor(inventory){
        this.inventory = inventory;
    }

    addProduct(product) {
        this.inventory.push(product);
        }

    getInventoryValue() {
        let totalValue = 0;
        this.inventory.forEach(product => {
            totalValue += product.price * product.quantity;
        })
        return totalValue;
    }

    static findProductByName(name) {
        const object = this.inventory.find(product => product.name === name);
        return object;
    }
}

const milk = new PerishableProductProperties("Milk 1L", 5.5, 100, "2024-12-31");
console.log(milk.toString());
const cream = new PerishableProductProperties("Cream 0.5L", 3.5, 50, "2025-01-31");
console.log(cream.toString());

const inventory1 = new PropertiesInventory([milk, cream]);

// console.log(inventory1)

const eggs = new PerishableProductProperties("Eggs 1dozen", 4.5, 120, "2024-12-25");
const butter = new PerishableProductProperties("Butter 250gr", 8, 90, "2025-01-15");
const salt = new ProductProperties("Salt 1kg", 3.25, 200);
const sugar = new ProductProperties("Sugar 1kg", 4.25, 150);
const flour = new ProductProperties("Flour 1kg", 4.75, 125);

const inventory2 = new PropertiesInventory([eggs, butter, salt, sugar, flour]);

console.log(inventory2);

ProductProperties.applyDiscount(inventory2.inventory, 0.15);

console.log(inventory2);