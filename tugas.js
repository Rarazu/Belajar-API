// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// end point 1 Kubus
app.use(express.json())

app.post("/kubus", (request, response) => {
    // tampung data tinggi dan berat
    let sisi = request.body.sisi

    let volume = sisi * sisi * sisi
    let luas = 6 * (sisi * sisi)

    return response.json({
        volume: volume,
        luas: luas
    })
})

// end point 2 Balok
app.get("/balok/:panjang/:lebar/:tinggi" , (request,response) => {
    // tampung data yg dikirimkan
    let panjang = request.params.panjang
    let lebar = request.params.lebar
    let tinggi = request.params.tinggi

    let volume = panjang * lebar * tinggi
    let luas = 2 * (panjang*lebar + panjang*tinggi + lebar*tinggi)

    return response.json({
        message: `Volume ${volume} dengan Luas permukaan ${luas}`
    })
})

// end point 3 Kerucut
app.use(express.json())

app.post("/kerucut", (request, response) => {
    // tampung data tinggi dan berat
    let jari = request.body.jari
    let selimut = request.body.selimut
    let tinggi = request.body.tinggi

    let volume = 1/3 * 3.14 * (jari*jari) * tinggi
    let luas = 3.14 * jari * (jari*selimut)
    return response.json({
        volume: volume,
        luas: luas
    })
})

// end point 4 Tabung
app.get("/tabung/:jari/:tinggi" , (request,response) => {
    // tampung data yg dikirimkan
    let jari = request.params.jari
    let tinggi = request.params.tinggi

    let volume = 3.14 * (jari*jari) * tinggi
    let luas = 2 * 3.14 * jari * (jari + tinggi)

    return response.json({
        message: `Volume ${volume} dengan Luas permukaan ${luas}`
    })
})
app.listen(2000, () => {
    console.log(`Server run on port 2000`);
})
