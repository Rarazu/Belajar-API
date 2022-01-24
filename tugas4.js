// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()


app.use(express.json())

app.post("/bmi", (request, response) => {
    // tampung data tinggi dan berat
    let tinggi = request.body.tinggi
    let berat = request.body.berat

    let bmi = berat / (tinggi * tinggi)
    let status = null

    if (bmi < 18.5) {
        status = `Kekurangan Gizi`
    }else if (bmi >= 18.5 && bmi < 25) {
        status = `Normal (ideal)`
    }else if (bmi >= 25 && bmi < 30) {
        status = `Kelebihan berat badan`
    }else if (bmi >= 30) {
        status = `Obesitas`
    }

    return response.json({
        tinggi: tinggi,
        berat: berat,
        nilai: bmi,
        status: status
    })
})

app.listen(2000, () => {
    console.log(`Server run on port 2000`);
})