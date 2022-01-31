const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

app.post("/search", (request,response) => {
    let keywords = request.body.keywords
    let data = [
        {nis : 101, nama: "Adinda", alamat: "Araya"},
        {nis : 102, nama: "Andika", alamat: "Sawojajar"},
        {nis : 103, nama: "Suji", alamat: "Araya"},
        {nis : 104, nama: "Rara", alamat: "Pakis"},
        {nis : 105, nama: "Jasmine", alamat: "Sawojajar"},
        {nis : 106, nama: "Sunoo", alamat: "Seoul"},
        {nis : 107, nama: "Beomgyu", alamat: "Daegu"},
        {nis : 108, nama: "Jungkook", alamat: "Busan"},
        {nis : 109, nama: "Jeno", alamat: "Seoul"},
        {nis : 110, nama: "Ryujin", alamat: "Jyp"}
    ]
    
    let result
    let jmlhData = 0

    result = data.filter((element) => element.nis == keywords || element.nama == keywords || element.alamat == keywords)
    jmlhData = result.length
    return response.json({
        jumlah_data : jmlhData,
        data : result
    })
    
})

app.listen(8001, () => {
    console.log(`Server run on port 8001`);
})