class FlatMapEx {

    constructor() {
        this.sal = [
            1,2,3,4,[5, 6, 7]
        ]

        this.matrix = [
            [1, 2],
            [3, 4],
            [
                5,
                [
                    6,
                    [8, 9, 10]
                ]
            ]
        ]
    }

    operationFlat() {
        // console.log(this.sal.flat())

        console.log(this.matrix.flat(1))
        console.log(this.matrix.flat(2))
        console.log(this.matrix.flat(3))
        console.log(this.matrix.flat(4))
    }

    operationFlatMap() {
        console.log(this.sal.flatMap(el => el * el))
    }
}

let fm = new FlatMapEx()
// fm.operationFlat()
fm.operationFlatMap()