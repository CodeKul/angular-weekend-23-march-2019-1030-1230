let fn = () => console.log(`Function Assigned to Variable`)
fn()

function fnPrms(fn) {
    fn()
}

fnPrms(() => {
    console.log(`Function Paramater`)
})


function fnRtn() {
    return () => {
        console.log(`Returning function from function`)
    }
}
fnRtn()()
let ft = fnRtn()
ft()

console.log('Started')
setTimeout( () => console.log(`completed`), 1000 )
console.log('Executed')