// -=-=-=-=-=-=-=-=-=- Promises -=-=-=-=-=-=-=-=-=-
// console.log("Before action!");

// // setTimeout(() => {
// //     console.log("Doing some task...");
// //     console.log("Done!");
// // }, 2000);

// let action = new Promise((resolve, reject) => {
//     console.log("Getting some data...");
//     setTimeout(() => {
//         //reject("Invalid operation with data!");
//         console.log("Done.");
//         resolve("Some data");
//     }, 1500);
// }).then(value => {
//     console.log("Getting additional info...");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Done.");
//             resolve(value + " with additional info");
//         }, 2300);
//     });
// });
// //.then(value => console.log("Working with", value))
// //.catch(reason => console.error("Error due to", reason));

// console.log("After action!");

// action.then(value => console.log("Working with", value))
//       .catch(reason => console.error("Error due to", reason));

// -=-=-=-=-=-=-=-=-=- Fetch -=-=-=-=-=-=-=-=-=-
const api_url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

// let currencies = fetch(api_url)
//     .then(response => response.json())
//     .catch(err => console.error(err));

// currencies.then(data => {
//     console.log("Working with data...");
//     console.log(data);
// });

function addCurrency(info) {
    const body = document.getElementById('table-body');

    body.innerHTML +=
        `<tr class="table-active">
            <th scope="row">${info.ccy}</th>
            <td>${info.base_ccy}</td>
            <td>${info.buy}</td>
            <td>${info.sale}</td>
        </tr>`;
}

let result = fetch(api_url)
    .then(res => res.json())
    // .catch(err => console.error(err))
    .then(data => {
        console.log(data);

        // show one element
        let item = data[0];
        document.body.innerHTML += `Currency: ${item.ccy} - ${item.buy} : ${item.sale}`;

        // show all elements
        data.forEach(i => addCurrency(i));
    });
