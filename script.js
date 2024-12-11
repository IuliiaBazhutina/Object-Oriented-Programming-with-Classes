class ProductProperties {
    static classProperties;

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
            product.price = product.price * (1 - discount);
        });
    }

    addProduct(product) {
        classProperties.push(product);
        }

    getInventoryValue() {
        let totalValue = 0;
        classProperties.forEach(product => {
            totalValue += product.price * product.quantity;
        })
        return totalValue;
    }

    findProductByName(name) {
        const object = classProperties.find(product => product.name === name);
        return object;
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

const milk = new PerishableProductProperties("Milk 1L", 5.5, 100, "2024-12-31");
console.log(milk.toString());
const cream = new PerishableProductProperties("Cream 0.5L", 3.5, 50, "2025-01-31");
console.log(cream.toString());

ProductProperties.classProperties = [milk, cream];

const eggs = new PerishableProductPropertiesroductProperties("Eggs 1dozen", 4.5, 120, "2024-12-25");
const butter = new PerishableProductPropertiesroductProperties("Butter 250gr", 8, 90, "2025-01-15");
const salt = new ProductProperties ("Salt 1kg", 3.25, 200);
const sugar = new ProductProperties("Sugar 1kg, 4.25, 150");