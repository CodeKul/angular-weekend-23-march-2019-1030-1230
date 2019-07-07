const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

let urlEnc = app.use(bodyParser.urlencoded({ extended: false }))
let jsonParser = app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/calc', (req, res) => {
    console.log(`${req.query['num1']}${req.query['op']}${req.query['num2']}`)
    res.send(
        ` Calculation is ${eval(`${req.query['num1']}${req.query['op']}${req.query['num2']}`)}`
    )
})

app.post(`/addCar`, jsonParser, (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.post(`/reg`, urlEnc, (req, res) => {
    res.send('Called')
    // res.json({
    //     body : req.body,
    //     status: 'success',
    //     message: 'operation successful'
    // })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))