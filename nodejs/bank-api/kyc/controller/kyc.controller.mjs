export class KycController {
    constructor(express, connection, jsonBodyParser) {
        this.router = express.Router()
        this.connection = connection
        this.connection.query(`
            create table if not exists kyc (
                name text,
                mobile text,
                pan text,
                uid int primary key
            )
        `)
        this.jsonBodyParser = jsonBodyParser

        this.fillForm()
        this.viewKyc()
    }

    getRouter() {
        return this.router
    }

    fillForm() {
        this.router.post('/', this.jsonBodyParser, (req, res) => {
            let kycObj = req.body
            let query = `
                insert into kyc values (
                    '${kycObj.name}',
                    '${kycObj.mobile}',
                    '${kycObj.pan}',
                    ${kycObj.id}
                )
            `
            this.connection.query(query, err => {
                if (err) {
                    res.json({
                        sts: 'error',
                        msg: 'Problem in saving KYC',
                        err: err
                    })
                } else {
                    res.json({
                        sts: 'success',
                        msg: 'KYC Saved Successfully',
                    })
                }
            })
        })
    }

    viewKyc(id) {
        this.router.get(``, (req, res) => {
            let query = `
                select 
                *
                from kyc
            `
            this.connection.query(query, (err, results, fields) => {
                if (err) {
                    res.json({
                        sts: 'error',
                        msg: 'Problem in fetching KYCs',
                        err: err
                    })
                    return
                }
                res.json({
                    msg: results,
                    sts : 'success',
                })
            })
        })
    }
}