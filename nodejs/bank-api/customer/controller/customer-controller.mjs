export class CustomerController {

    constructor(express) {
        this.router = express.Router()

        this.saveCustomer()
        this.deleteCustomer()
    }

    getRouter() {
        return this.router
    }

    saveCustomer() {
        this.router.post('/', (req, res) => {

            // store it in db

            res.json({
                status: 'success',
                message: 'customer saved successfully'
            })
        })
    }

    deleteCustomer() {
        this.router.delete('/', (req, res) => {
            res.json({
                status: 'success',
                message: 'customer deleted successfully'
            })
        })
    }
}