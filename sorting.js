/**{
    "key" : "nama",
    "type" : "descending",
    "data" : [
        {"nis":100, "nama":"peter", "umur":20},
        {"nis":101, "nama":"john", "umur":35},
        {"nis":102, "nama":"dormamu", "umur":28}
    ]
} */

const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())

app.post("/sorting", (request,response) => {
    data = request.body.data
    key = request.body.key
    type = request.body.type
    let result
    for (let i = 0; i < data.length; i++) {
        if (type == 'ascending') {
            if (key == 'nis') {
                 result = data.sort(function (a,b) { return a.nis - b.nis})
            } else if (key == 'nama') {
                result = data.sort(function(a, b){
                    if(a.nama < b.nama) { return -1; }
                    if(a.nama > b.nama) { return 1; }
                    return 0;
                })
            } else if (key == 'umur') {
                result = data.sort(function (a,b) { return a.umur - b.umur})
            }
        } else if (type == 'descending') {
            if (key == 'nis') {
                result = data.sort(function (a,b) { return b.nis - a.nis})
            } else if (key == 'nama') {
                result = data.sort(function(a, b){
                    if(a.nama < b.nama) { return 1}
                    if(a.nama > b.nama) { return -1}
                    return 0
                })
            } else if (key == 'umur') {
                result = data.sort(function (a,b) { return b.umur - a.umur})
            }
        }

        
    }
    return response.json({
       "result" : result
    })
    
})

app.listen(8001, () => {
    console.log(`Server run on port 8001`);
})