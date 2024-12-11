class ProductProperties {
    
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

    static applyDiscount(products, discount) {
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
    constructor(inventory) {
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

    findProductByName(name) {
        const object = this.inventory.find(product => product.name === name);
        if (object === undefined) { 
            return null; }
        else { 
            return object; }
    }
}

// PART 1

console.log("\nPart1")

const honey = new ProductProperties("Honey 1L", 10, 50);
console.log(honey.toString());
console.log(`Total value: ${honey.getTotalValue()}`);

// PART 2

console.log("\nPart2")

const milk = new PerishableProductProperties("Milk 1L", 5.5, 100, "2024-12-31");
console.log(milk.toString());
const cream = new PerishableProductProperties("Cream 0.5L", 3.5, 50, "2025-01-31");
console.log(cream.toString());

// PART 5

console.log("\nPart5")

// 5 products

const eggs = new PerishableProductProperties("Eggs 1dozen", 4.5, 120, "2024-12-25");
const butter = new PerishableProductProperties("Butter 250gr", 8, 90, "2025-01-15");
const salt = new ProductProperties("Salt 1kg", 3.25, 200);
const sugar = new ProductProperties("Sugar 1kg", 4.25, 150);
const flour = new ProductProperties("Flour 1kg", 4.75, 125);

// 5 objects are added to the inventory

const inventory1 = new PropertiesInventory([eggs, butter, salt, sugar, flour]);

// print inventory before discount
inventory1.inventory.forEach(product => {
    console.log(product.toString());
});


// print total value of th einventory before discount

let totalValue1 = inventory1.getInventoryValue();
console.log(`Inventory value before discount: ${totalValue1}\n`);

// apply discount 15%

ProductProperties.applyDiscount(inventory1.inventory, 0.15);

// print inventory after discount
inventory1.inventory.forEach(product => {
    console.log(product.toString());
});

// print total value of th einventory after discount

let totalValue2 = inventory1.getInventoryValue();
console.log(`Inventory value after discount: ${totalValue2}\n`);

// find and print detail of a product by its name

console.log(inventory1.findProductByName('Salt 1kg'));