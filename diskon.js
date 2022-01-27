/** case 2
 * {
    "diskon" : 
    [
    {"name":"Beras","price":15000, "qty":10,
    "min-discount":5, "discount": 0.3},
    {"name":"Telur","price":20000, "qty":5,
    "min-discount":10, "discount": 0.2},
    {"name":"Gula","price":11000, "qty":15,
    "min-discount":15, "discount": 0.1}
    ]
} */

const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

// JSON is STRING

app.post("/diskon", (request,response) => {
    // store the request data
    let data = request.body.diskon
    // create variabel
    let total = 0
    let harga = 0
    let diskon = 0
    let totalAkhir = 0
    let totalItem = 0

    for (let i = 0; i < data.length; i++) {
        if (data[i].qty >=  data[i].min_discount) {
            total = data[i].price * data[i].qty
            diskon = total * data[i].discount
            harga = total - diskon
        } else if (data[i].qty < data[i].min_discount){
            harga = data[i].price * data[i].qty
        }

        totalAkhir += harga
        totalItem += data[i].qty
    }

    // give response data
    return response.json({
        total : totalAkhir,
        total_item : totalItem
    })
})

app.listen(8001, () => {
    console.log(`Server run on port 8001`);
})