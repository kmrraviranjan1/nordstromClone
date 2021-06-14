let item = JSON.parse(localStorage.getItem('item'));

let title = document.querySelector('title');
title.innerHTML = item.name;


let iconParent = document.getElementById('icon-parent');

let imageIcon = document.getElementById('img-icon')
imageIcon.onclick = function () {
    console.log(55)
    mainImg.src = item.image
    
}
imageIconImg = document.createElement('img');
imageIconImg.src = item.imageIcon
imageIcon.appendChild(imageIconImg)

let quickImageIcon = document.getElementById('quick-img-icon')
quickImageIcon.onclick=function(){
    mainImg.src=item.quickImage
}
quickImageIconImg = document.createElement('img');
quickImageIconImg.src = item.quickImageIcon
quickImageIcon.appendChild(quickImageIconImg)

let videoIcon = document.getElementById('video-icon')

videoIconImg = document.createElement('img');
videoIconImg.src = item.videoIcon
videoIcon.appendChild(videoIconImg)

let rawMaterialImageIcon = document.getElementById('raw-icon')
rawMaterialImageIcon.onclick=function(){
    mainImg.src= item.rawMaterialImage
}
rawMaterialImageIconImg = document.createElement('img');
rawMaterialImageIconImg.src = item.rawMaterialImageIcon
rawMaterialImageIcon.appendChild(rawMaterialImageIconImg)

let mainImage = document.getElementById('main-img');
let mainImg = document.createElement('img');
mainImg.src = item.image;
mainImage.appendChild(mainImg)



let sizeInform = document.getElementById('size-inform');
let info = item.sizeInfo;
let sizeUl = document.getElementById('size-ul')
for (let i = 0; i < info.length; i++){
   
    let li = document.createElement('li');
    li.innerText= info[i]
    sizeUl.appendChild(li)
    
}

let detailDisc = document.getElementById('detail-disc')
detailDisc.innerHTML = item.description;

let care = item.care;
let careUl = document.getElementById('care-ul');
for (let i = 0; i < care.length; i++){
    let li = document.createElement('li');
    li.innerHTML = care[i];
    careUl.appendChild(li)
}


let brandDesc = document.getElementById('brand-desc');
brandDesc.innerHTML=`<p> ${item.brandDesc}</p>`
let brandHead = document.getElementById('brand-head');
brandHead.innerHTML = `<h2>${item.brand}</h2>`




let raters = document.getElementById('raters');
raters.innerHTML = `(${item.raters})`

let name = document.getElementById('name');
name.innerHTML = item.name;

let brandName = document.getElementById('brand-name');
brandName.innerHTML = item.brand

let price = document.getElementById('price');
price.innerHTML = `INR ${item.price}`;

let discount = 25;
let discountDiv = document.getElementById('discount');
discountDiv.innerHTML = `${discount}% off`;

let sp = document.getElementById('sprice');
let sellP = discount / 100 * item.price;
sp.innerHTML=`INR ${sellP}`



function addToBag(e) {
    let bagTest = JSON.parse(localStorage.getItem('bag'));
    
    if (bagTest == null) {
         let bag = [];
    }
    else {
        let bag = JSON.parse(localStorage.getItem('bag'))
    }
    bag.push(item);
    console.log('bag: ', bag);
    localStorage.setItem('bag',JSON.stringify(bag))
    

    // window.location.href= "../html/shoppingBag.html"
}