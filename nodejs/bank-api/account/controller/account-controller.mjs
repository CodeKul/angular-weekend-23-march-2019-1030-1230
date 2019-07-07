export class AccountController {

    constructor(express) {
        this.router = express.Router()

        this.newAccount()
        this.deleteAccount()
    }

    getRouter() {
        return this.router
    }
    
    newAccount() {
        this.router.post('/', (req, res) => {
            // store it in db
            res.json({
                status: 'success',
                message: 'account saved successfully'
            })
        })
    }

    deleteAccount() {
        this.router.delete('/', (req, res) => {
            res.json({
                status: 'success',
                message: 'account deleted successfully'
            })
        })
    }
}