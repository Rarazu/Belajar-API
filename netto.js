/**{
    "data" : [
        {"id":1, "nama":"beras", "bruto":100, "harga":15000, "pack":"karung"},
        {"id":2, "nama":"gula", "bruto":150, "harga":11000, "pack":"karung"},
        {"id":3, "nama":"minyak", "bruto":50, "harga":20000, "pack":"plastik"},
        {"id":4, "nama":"telur", "bruto":200, "harga":25000, "pack":"kayu"}
    ],

    "pack":[
        {"id_pack" : 1, "nama_pack":"karung,", "berat": 1},
        {"id_pack" : 2, "nama_pack":"plastik,", "berat": 0.5},
        {"id_pack" : 3, "nama_pack":"kayu,", "berat": 2}
    ]
} */
const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

app.post("/netto", (request,response) => {
    data = request.body.data
    pack = request.body.pack
    let netto = 0
    let total = 0
    let hasil = []
    
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < pack.length; j++) {
            netto = Number(data[i].bruto - pack[j].berat)
            total = Number(netto * data[i].harga)
        }
        hasil.push({
            data : data[i],
            netto : netto,
            total_harga : total
        }) 
    }
    return response.json({
       hasil : hasil
    })
    
})

app.listen(8001, () => {
    console.log(`Server run on port 8001`);
})