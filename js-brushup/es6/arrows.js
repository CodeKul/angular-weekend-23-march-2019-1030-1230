document.getElementById('myNm').onclick = function () {
    console.log(`Clicked`)
    console.log(this)
}
document.getElementById('myNm').onclick = () => {
    console.log(this)
}

