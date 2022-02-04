const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

// menghitung huruf vokal dan konsonan
app.post("/word", (request,response) => {
    word = request.body.word
    let hitung = 0

    let vowels = word.match(/[aeiou]/gi)
    let consonants = word.match(/[^aeiou]/gi)
    let jumlah_vokal = vowels.length
    let jumlah_konsonan = consonants.length
    return response.json({
       jumlah_vokal : jumlah_vokal,
       jumlah_konsonan : jumlah_konsonan
    })
    
})

// menghitung jumlah kata
app.post("/statement", (request,response) => {
    statement = request.body.statement
    let jumlah_kata = 0
    for (var i = 0; i < statement.length; i++) {
        if (statement[i] == " ") {
            jumlah_kata += 1
        }
    }
    jumlah_kata += 1
    return response.json({
       jumlah_kata : jumlah_kata
    })
    
})

app.listen(8001, () => {
    console.log(`Server run on port 8001`);
})