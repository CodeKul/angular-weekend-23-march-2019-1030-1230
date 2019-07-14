import express from 'express'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import { CustomerController } from './customer/controller/customer-controller.mjs';
import { AccountController } from './account/controller/account-controller.mjs';
import { KycController } from './kyc/controller/kyc.controller.mjs';
import { DbConfig } from './dbconfig.mjs';

const app = express()
const port = 3000

let urlEnc = bodyParser.urlencoded({
    extended: true,
    parameterLimit: 1000000,
    limit: '50mb'
})

let jsonBodyParser = bodyParser.json()

let dbConfig = new DbConfig()
dbConfig.myCon().connect(
    err => {
        if (err) {
            console.error(err)
            return
        }
        app.use(fileUpload())
        app.use(
            '/kyc',
            new KycController(
                express,
                dbConfig.connection,
                jsonBodyParser
            ).getRouter()
        )
        app.use(
            '/customer',
            new CustomerController(
                express
            ).getRouter()
        )
        app.use(
            '/account',
            new AccountController(
                express
            ).getRouter()
        )
    }
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))