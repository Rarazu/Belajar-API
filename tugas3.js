// load library express
const { request, response } = require("express")
let express = require("express")

// inisiasi objek baru dari express
let app = express()


// end point 2 Biner
app.get("/convert/:satuan/:bil" , (request,response) => {
    // tampung data yg dikirimkan
    let satuan = request.params.satuan
    let bil = Number(request.params.bil)

    if (satuan == 'decimal') {
        let binery = bil.toString(2)
        let octal = bil.toString(8)
        let hexadecimal = bil.toString(16)
        return response.json({
            satuan: satuan,
            bilangan: bil,
            hasil:{
                Biner : binery,
                Octal : octal,
                Hexadecimal : hexadecimal
            }
        })
    } else if (satuan == 'binery') {
        let decimal = parseInt(bil, 2)
        let octal = parseInt(bil, 2).toString(8)
        let hexadecimal = parseInt(bil, 2).toString(16)
        return response.json({
            satuan: satuan,
            bilangan: bil,
            hasil:{
                Decimal : decimal,
                Octal : octal,
                Hexadecimal : hexadecimal
            }
        })
    } else if (satuan == 'octal') {
        let decimal = parseInt(bil,8)
        let binery = decimal.toString(2)
        let hexadecimal = decimal.toString(16)
        return response.json({
            satuan: satuan,
            bilangan: bil,
            hasil:{
                Decimal : decimal,
                Binery : binery,
                Hexadecimal : hexadecimal
            }
        })
    } else if (satuan == 'hexadecimal') {
        let decimal = parseInt(bil,16)
        let binery = decimal.toString(2)
        let octal = decimal.toString(8)
        return response.json({
            satuan: satuan,
            bilangan: bil,
            hasil:{
                Decimal : decimal,
                Binery : binery,
                Octal : octal
            }
        })
    }
})

app.listen(2000, () => {
    console.log(`Server run on port 2000`);
})