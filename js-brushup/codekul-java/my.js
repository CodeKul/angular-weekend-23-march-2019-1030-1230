import { Observable } from "rxjs";

let num1 = 10
let num2 = 20

console.log(`Addition is ${num1 + num2}`)

function myObs() {
    return Observable.create(sub => {
        for(let i = 0; i < 1000 ; i++){
            sub.next(i)
        }
        sub.complete()
    })
}

myObs().subscribe(
    xcvchdgh => console.log(xcvchdgh),
    err => console.log(err),
    () => console.log(`Operation completed`)
)

