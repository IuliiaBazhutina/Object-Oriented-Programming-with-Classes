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
}


class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

}


