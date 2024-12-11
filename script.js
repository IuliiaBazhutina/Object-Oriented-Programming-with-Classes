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
            this.price = this.price * (1 - discount);
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



