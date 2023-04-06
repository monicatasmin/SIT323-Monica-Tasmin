// Express WebServer
var express = require('express')
var app = express()

// serve static files in the 'public' directory
app.use(express.static('public'))

// GET
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

// list to a particular port
app.listen(8080, function (req, res){
    console.log("Server is running on port 8080")
})
