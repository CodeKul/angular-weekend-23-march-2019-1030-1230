class MapReduce {

    constructor(ex) {
        this.ex = ex
        this.mobiles = [`HTC`, `Apple`, 'Windows', 'Andriod', 'Tablet']
        // console.log(mobiles)

        this.uprArr = this.mobiles.map(mob => mob.toUpperCase())
        // console.log(uprArr)

        this.sals = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    reducerFn(acc, curr) {
        let logic = (curr * curr) + acc
        console.log(`Acc - ${acc} and Curr - ${curr} Logic - ${logic}`)
        return logic
    }

    reduceIt() {
        // console.log(this)
        // console.log(this.sals.reduce(this.reducerFn))
    }
}

let mr = new MapReduce(58) // object construction
console.log(mr)
mr.reduceIt()
console.log(mr)

let ct = new MapReduce(789)
console.log(ct)
