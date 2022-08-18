let cel = document.getElementById("cel")
let fah = document.getElementById("fah")

// console.log(cel)
// console.log(fah)
cel.addEventListener("input",function(){
    let c = this.value
    let f =   c*(9/5)+32
    
    fah.value = f.toFixed(2)
    // console.log(c)
})
fah.addEventListener("input",function(){
    let f = this.value
    let c = (f - 32) * 5 / 9 
    cel.value = c.toFixed(2)
    // console.log(c)
})