const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/calc', (req, res) => {
    console.log(`${req.query['num1']}${req.query['op']}${req.query['num2']}`)
    res.send(
        ` Calculation is ${eval(`${req.query['num1']}${req.query['op']}${req.query['num2']}`)}`
    )
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))