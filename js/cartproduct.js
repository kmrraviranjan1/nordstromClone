

var cartproduct = localStorage.getItem("productCart")
cartproduct = JSON.parse(cartproduct)
// console.log(cartproduct)


function showcartproduct() {
    var parent = document.getElementById("showcartproduct")
    // console.log(productlist)
    cartproduct.forEach(function (el) {

        var div = document.createElement('div')
        div.setAttribute("class", "productbox")

        var p_name = document.createElement('p')
        p_name.innerHTML = `Name:${el.Name}`

        var p_price = document.createElement('p')
        p_price.innerHTML = `Price:${el.Price}`

        var img = document.createElement('img')
        img.src = el.Image

        // var btn = document.createElement("button")
        // btn.textContent = "Add to Cart"
        // btn.style.display = 'block'
        // btn.onclick = function () {
        //     AddToCart(el)
        // }
        // btn.setAttribute("class", "btn")

        div.append(img, p_name, p_price)
        parent.append(div)
    })
}
showcartproduct()
function totalamount() {
    var totalprice = document.getElementById("totalprice")
    cartproduct.forEach(function (el) {
        console.log(el)
    })
}
totalamount()