let bag = JSON.parse(localStorage.getItem('bag'));

let parent = document.getElementById('parent');

let total = 0;


bag.forEach(function(element) {
    let card = document.createElement('div');
    card.setAttribute('class','card flex')
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = element.imageIcon;
    imgDiv.appendChild(img);

    let descDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = `<p>${element.brand}</p><p>${element.name}</p>`;
    let insDiv = document.createElement('div');
    let staticDiv = document.createElement('div');
    let vanImgDiv = document.createElement('div');
    let deliveryDiv = document.createElement('div');
    deliveryDiv.innerHTML=`<h3>Delivery</h3><p>International orders usually arrive within 5–13 business days. We'll give you delivery dates in checkout.</p>`
    staticDiv.append(vanImgDiv,deliveryDiv)

    let buttonDiv = document.createElement('div')
    let removeButton = document.createElement('button')
    removeButton.textContent='Remove'
    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save for later'
    buttonDiv.append(removeButton, saveButton);
    descDiv.append(nameDiv,insDiv,staticDiv,buttonDiv)


    let qtyDiv = document.createElement('div');


    let priceDiv = document.createElement('div');
    let priceP = document.createElement('p');
    let price = element.price/80;
    total = total + price;
    priceP.innerHTML = `$${price}`
    priceDiv.appendChild(priceP)

    card.append(imgDiv,descDiv,qtyDiv,priceDiv)
    parent.append(card)
});


let totalDiv = document.getElementById('total-div');
totalDiv.innerHTML = `$${total}`