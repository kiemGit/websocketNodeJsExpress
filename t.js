const express = require('express');

const app = express();
const port = process.env.port || 8000

app.get('/', (req, res) => {
    res.send("Hello Network!")
});

app.listen(port, '192.168.0.38', ()=>{
    console.log(`Listening port on ${port}`)
});
