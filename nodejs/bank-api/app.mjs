import express from 'express'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import { CustomerController } from './customer/controller/customer-controller.mjs';
import { AccountController } from './account/controller/account-controller.mjs';

const app = express()
const port = 3000

let urlEnc = bodyParser.urlencoded({
    extended: true,
    parameterLimit: 1000000,
    limit: '50mb'
})


app.use(fileUpload())
app.use('/customer', new CustomerController(express).getRouter())
app.use('/account', new AccountController(express).getRouter())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))