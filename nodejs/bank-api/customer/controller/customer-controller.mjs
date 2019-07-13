import 'path'
export class CustomerController {

    constructor(express) {
        this.router = express.Router()

        this.saveCustomer()
        this.deleteCustomer()
        this.uploadProiflePic()
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

    uploadProiflePic() {
        this.router.post('/uploadDP', (req, res) => {
            console.log(req)
            if (Object.keys(req.files).length == 0) {
                res.status(400).json({
                    msg: 'Kindly attach file properly',
                    sts: 'fail'
                });
                return;
            }

            req.files.pic.mv(`/home/aniruddha/pics/${req.files.pic.name}`, err => {
                if (err) {
                    res.status(500).json({
                        sts: 'fail',
                        msg: 'Problem in saving file',
                        err : err
                    })
                    return
                }
                res.status(200).json({
                    sts: 'success',
                    msg: 'picture uploaded successfully'
                })
            })
        })
    }
}