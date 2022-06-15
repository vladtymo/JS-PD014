// --------------- Classes ---------------

class User {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    print() {
        console.log(`User: ${this.name} ${this.email} ${this.email}`);
    }

    setPhone(newPhone) {
        this.phone = newPhone
    };
    getPhone() {
        return this.phone;
    }
}

let user1 = new User('Bob', 'qetwerw@gmail.com', '33-554-44');
user1.print();

user1.setPhone('777-777');
console.log("Updated phone number: " + user1.getPhone());

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this._price = price;
        this.quantity = quantity;
        this._totalPrice = price * quantity;
    }

    // setPrice(newPrice) {
    //     this.price = newPrice;
    //     this.totalPrice = this.price * this.quantity; // update total price
    // }

    // ---------- setter
    set price(newPrice) {
        this._price = newPrice;
        this.updateTotalPrice();
    }
    updateTotalPrice() {
        this._totalPrice = this._price * this.quantity; // update total price
    }

    // getTotalPrice() {
    //     return this.totalPrice;
    // }

    // ---------- getter
    get totalPrice() {
        return this._totalPrice;
    }

    render() {
        document.write(`<p>Product [${this.name}] - ${this._price}$ / ${this.quantity} = ${this._totalPrice}$</p>`);
    }
}

let pr1 = new Product('iPhone X', 300, 3);

pr1.price = 400;                        // setter
console.log("new price: " + pr1.price); // getter

pr1.render();

let products = [
    new Product('iPhone X', 300, 3),
    pr1,
    pr1,
    new Product('LG G5', 120, 7)
];

for (const p of products) {
    p.render();
}
