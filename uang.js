const express = require("express")
const res = require("express/lib/response")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

app.post("/uang", (request,response) => {
    total = request.body.total
    let uang = [100000,50000,20000,5000,2000,1000,500,200,100]
    jmlUang = 0
    let hasil = []

    for (let i = 0; i < uang.length; i++) {
        if (total >= uang[i]) {
            jmlUang = Math.floor(total / uang[i])
            total = total % uang[i]

            hasil.push({
                pecahan : uang[i],
                jumlah : jmlUang
            })
        }   
    }

    return response.json({
        hasil_pecahan : hasil
    })
})

app.listen(8001, () => {
    console.log(`Server run on port 8001`);
})