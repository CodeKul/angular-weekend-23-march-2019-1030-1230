document.getElementById('myNm').onclick = function () {
    console.log(`Clicked`)
    console.log(this)
}
console.log(`before click`)
document.getElementById('myNm').onclick = () => {
    console.log(`clicked`)
}
console.log(`after click`)

