import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

let urlEnc = bodyParser.urlencoded({
    extended: true,
    parameterLimit: 1000000,
    limit: '50mb'
})


app.get('/', (req, res) => res.send('Hello World!'))
app.post('/reg', urlEnc, (req, res) => {
    res.json({
        status: 'success'
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))