// --------------- Objects ---------------

// separate variables
let id = 230;
let name = "Bob";
let email = "example@gmail.com";
let password = "Qwerty";

// object
let user = {
    // property_name: property_value, ...
    id: 230,
    name: "Bob",
    email: "example@gmail.com",
    password: "Qwerty"
};

console.log(`User email: ${user.email}`);
console.log(user);

// add property
user.phone = "22-44-22";

// delete property
delete user.phone;

console.log(`User phone: ${user.phone}`);

// inner objects

let myOrder = {
    number: 3443,
    date: "10.06.2022",
    address: {
        city: "Rivne",
        street: "Soborna",
        building: "5a"
    }
};

// create funciton
function showOrderDestination(order) {
    console.log(`Order #${order.number}`);
    console.log(`Adress: ${order.address.street} ${order.address.building}, ${order.address.city}`);
}

// invoke function
showOrderDestination(myOrder);

// function variables
let add = function (a, b) { alert(a + b); };
console.log("Function add. Type: " + typeof (add));

add(4, 5);

// functions in objects
let product = {
    model: "HP ZBook",
    type: "Laptop",
    price: 25600,
    quantity: 4,

    // methods
    print() {
        console.log(`<><><><> ${this.model} : ${this.type} <><><><>`);
        console.log(`Total price: ${this.price * this.quantity}UAH`);
    },
    render() {
        document.write(`<h3>-=-=-=-=- ${this.model} : ${this.type} -=-=-=-=-</h3>`);
        document.write(`<p>Total price: ${this.price * this.quantity}UAH</p>`);
    }
}

product.print();
product.render();

document.write(`<p>Generated text from JavaScript</p>`);