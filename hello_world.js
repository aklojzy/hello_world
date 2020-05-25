const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('Hello World!');
    console.log('xD')
})
app.get('/recipe/:id',(req,res) => {
    res.send('recipe id: ' +req.params.id);
}) 
app.listen(port, () => console.log('Example app listening at http://localhost:${port}'))