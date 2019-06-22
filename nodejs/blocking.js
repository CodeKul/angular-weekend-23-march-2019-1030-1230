console.log(`Started First Operation`)
setTimeout(function () {
    console.log(`1500 ms has passed`)
}, 1500)
console.log(`First Operation Completed`)

console.log(`Started Second Operation`)
setTimeout(function () {
    console.log(`Second 1500 ms has passed`)
}, 2000)
console.log(`Second Operation Completed`)
let obj = {
    col1 : 1,
    col2 : 2
}

console.table(obj)


