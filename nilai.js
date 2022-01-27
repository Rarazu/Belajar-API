/** case 1
 * {
    "data" : 
    [
    {"nama":"Jack","math":95, "english":80},
    {"nama":"John","math":70, "english":75},
    {"nama":"Jinn","math":60, "english":90},
    {"nama":"Zyn","math":80, "english":50}
    ]
} */

const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

// JSON is STRING

app.post("/nilai", (request,response) => {
    // store the request data
    let data = request.body.data
    // create variabel
    let total = 0
    let  kkm = 0, rerata = 0
    let lulus = []
    let tidak_lulus = []

    for (let i = 0; i < data.length; i++) {
        total += parseFloat(data[i].math + data[i].english)
    }
    kkm = total / (data.length * 2)

    for (let i = 0; i < data.length; i++) {
        rerata = (data[i].math + data[i].english) / 2
        if (rerata >= kkm) {
            lulus.push(data[i].nama)
        } else if (rerata < kkm) {
            tidak_lulus.push(data[i].nama)
        }
    }
    // give response data
    return response.json({
        jumlah : total,
        kkm : kkm,
        lulus : lulus,
        tidak_lulus : tidak_lulus
    })
})

app.listen(8001, () => {
    console.log(`Server run on port 8001`);
})