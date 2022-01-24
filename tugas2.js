// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// end point 1 Kubus
app.use(express.json())

app.get("/convert/:satuan/:suhu" , (request,response) => {
    // tampung data yg dikirimkan
    let satuan = request.params.satuan
    let suhu = request.params.suhu

    if (satuan == 'celcius') {
        let reamur = 4/5 * suhu
        let fahrenheit = 9/5 * suhu + 32
        let kelvin = 273 + Number(suhu)
        return response.json({
            satuan: satuan,
            suhu: suhu,
            hasil:{
                Reamur : reamur,
                Fahrenheit : fahrenheit,
                Kelvin : kelvin
            }
        })
    } else if (satuan == 'reamur') {
        let celcius = 5/4 * suhu
        let fahrenheit = 9/4 * suhu + 32
        let kelvin = 5/4 * suhu + 273
        return response.json({
            satuan: satuan,
            suhu: suhu,
            hasil:{
                Celcius : celcius,
                Fahrenheit : fahrenheit,
                Kelvin : kelvin
            }
        })
    } else if (satuan == 'fahrenheit') {
        let celcius = 5/9 * (suhu - 32)
        let reamur = 4/9 * (suhu - 32)
        let kelvin = 5/9 * (suhu - 32) + 273
        return response.json({
            satuan: satuan,
            suhu: suhu,
            hasil:{
                Celcius : celcius,
                Reamur : reamur,
                Kelvin : kelvin
            }
        })
    } else if (satuan == 'kelvin') {
        let celcius = suhu - Number(273)
        let reamur = 4/5 * (suhu - 273)
        let fahrenheit = 5/9 * (suhu - 273) + 32
        return response.json({
            satuan: satuan,
            suhu: suhu,
            hasil:{
                Celcius : celcius,
                Reamur : reamur,
                Fahrenheit : fahrenheit
            }
        })
    } 
})

app.listen(2000, () => {
    console.log(`Server run on port 2000`);
})