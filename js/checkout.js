var cartproduct = localStorage.getItem("productCart")
cartproduct = JSON.parse(cartproduct)
// console.log(cartproduct)
function addprice() {
    var parent = document.getElementById("price-layout")
    var items_price = document.getElementById("items_price")
    var Shipping_fee = document.getElementById("Shipping_fee")
    var taxes = document.getElementById("taxe")
    var total = document.getElementById("total")
    var sum = 0;
    cartproduct.forEach(function (el) {
        // console.log(el.Price)
        sum += Number(el.Price)
    })
    var taxe = sum * (18 / 100)
    var shipping = 200
    var totalprice = taxe + sum + shipping


    // console.log(sum, taxe, shipping, totalprice)
    items_price.append(`Items Price:- ${sum}`)
    Shipping_fee.append(`Shipping fee:- ${shipping}`)
    taxes.append(`Taxe :- ${taxe}`)
    total.append(`Total Price :- ${totalprice}`)
}
addprice()

function usersAdd() {
    var parent = document.getElementById("showaddress")


    var first_name = document.getElementById("first_name").value
    var last_name = document.getElementById("last_name").value
    var email = document.getElementById("email").value
    var address_1 = document.getElementById("address_1").value
    var address_2 = document.getElementById("address_2").value
    var postal_code = document.getElementById("postal_code").value
    var city = document.getElementById("city").value
    var region = document.getElementById("region").value
    var Phone = document.getElementById("Phone").value
    var location = document.getElementById("location").value

    // console.log(email, first_name, last_name, address_1, address_2, postal_code, city, region, Phone, location)
    var p1 = document.createElement("p")
    p1.textContent = `${first_name + last_name}`
    var p2 = document.createElement("p")
    p2.textContent = `${address_1}`
    var p3 = document.createElement("p")
    p3.textContent = `${postal_code}`
    var p4 = document.createElement("p")
    p4.textContent = `${city}`
    var p5 = document.createElement("p")
    p5.textContent = `${Phone}`
    var p6= document.createElement("p")
    p6.textContent = `${location}`
    var h3= document.createElement("h3")
    h3.textContent=`DELIVERY ADDRESS:`
    parent.append(p1,p2,p3,p4,p5,p6)
}




