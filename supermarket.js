const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

app.post("/market", (request,response) => {
    let data = request.body.market
    let total = 0, totalBayar = 0

    for (let i = 0; i < data.length; i++) {
        total += data[i].harga * data[i].jumlah
    }

    let ppn = total * 10/100
    totalBayar += total + ppn

    return response.json({
        "total_bayar" : totalBayar
    })
})

app.listen(8001, () => {
    console.log(`Server run on port 8001`);
})