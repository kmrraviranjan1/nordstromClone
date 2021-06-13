let item = JSON.parse(localStorage.getItem('item'));

let title = document.querySelector('title');
title.innerHTML = item.name;


let sizeInform = document.getElementById('size-inform');
let info = item.sizeInfo;
let sizeUl = document.getElementById('size-ul')
for (let i = 0; i < info.length; i++){
   
    let li = document.createElement('li');
    li.innerText= info[i]
    sizeUl.appendChild(li)
    
}


let brandDesc = document.getElementById('brand-desc');
brandDesc.innerHTML=`<p> ${item.brandDesc}</p>`
let brandHead = document.getElementById('brand-head');
brandHead.innerHTML = `<h2>${item.brand}</h2>`


