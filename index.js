const express = require('express')
const app = express()
const fs = require('fs')
const port = 3001

app.listen(port)

app.get("/", (req,res) => {
    var file = fs.createReadStream('./files/dummy.pdf');
    res.setHeader('Content-type', 'application/pdf');
    file.pipe(res);
})
