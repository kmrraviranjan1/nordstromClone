
let parent = document.getElementById('parent');
    

let original = JSON.parse(localStorage.getItem('clothes'));

let itemavailable = 0;
appendItem(original);


function appendItem(data) {
    
    
    data.forEach(function (element) {
        itemavailable++;
        let card = document.createElement('div');
        card.setAttribute('class','card')
        let imgcard = document.createElement('div');
        imgcard.setAttribute('class','img-card')
        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'img-div');
        imgDiv.onclick = function () {
            let item = localStorage.getItem('item');
            item = null;
            localStorage.setItem('item',JSON.stringify(element))
            
            
            window.location.href = "../html/item.html"
            
        }    
        let img = document.createElement('img');
    
        img.src = element.image;
        imgDiv.appendChild(img);
        let quickDiv = document.createElement('div');
        quickDiv.setAttribute('class','quick-Div')
        imgcard.append(imgDiv,quickDiv)

        let desCard = document.createElement('div');
        desCard.setAttribute('class','des-card')
        
        let colorSelector = document.createElement('div');
        colorSelector.setAttribute('class','color-selector')
        let blue = document.createElement('div')
        blue.setAttribute('class','blue')
        let black = document.createElement('div')
        black.setAttribute('class','black')
        let yellow = document.createElement('div')
        yellow.setAttribute('class','yellow')
        let voilet = document.createElement('div')
        voilet.setAttribute('class','voilet')
        colorSelector.append(blue, black, yellow, voilet);
        
        let tagDiv = document.createElement('div');
        tagDiv.setAttribute('class','tag-div')
        let tag = document.createElement('p');
        
        tag.innerHTML = `${element.tag}`;
        tagDiv.appendChild(tag);

        let nameDiv = document.createElement('div');
        nameDiv.setAttribute('class','name-div')
        let name = document.createElement('p');
        
        name.innerHTML = `${element.brand} ${element.name}`
        nameDiv.appendChild(name);
        
        let priceDiv = document.createElement('div');
        priceDiv.setAttribute('class','price-div')
        let price = document.createElement('p');
        
        price.innerHTML = `INR ${element.price*80}`;
        priceDiv.append(price);

        let ratingDiv = document.createElement('div');
        ratingDiv.setAttribute('class','rating-div')
        let rating = document.createElement('p');
        let actualRate = Number(element.rating);
        console.log('actualRate: ', actualRate);
        let ratingString = "";
        for (let i = 0; i < actualRate; i++){
            ratingString= ratingString+"*"
        }
        
        rating.innerHTML = `${ratingString} (${element.raters})`;
        ratingDiv.appendChild(rating);
        
        desCard.append(colorSelector, tagDiv, nameDiv, priceDiv,ratingDiv);

        card.append(imgcard, desCard);
        parent.appendChild(card)
    })
}


function sorting() {
    let sortValue = document.getElementById("sort").value;
    switch (sortValue) {
        case "1":
            sortOriginal();
            break;
        case "2":
            sortRating();
            break;
        case "3":
            sortphl();
            break;
        
        case "4":
            sortplh();
            break
    }
        
}

function sortOriginal() {
    parent.innerHTML = null;
    appendItem(original)
}


function sortRating() {
    parent.innerHTML = null;
    let newData = JSON.parse(localStorage.getItem('clothes'));
    newData.sort(function (a, b) {
        return a.rating - b.rating;
    })
    appendItem(newData)
    
}
function sortplh() {
    parent.innerHTML = null;
    let newData = JSON.parse(localStorage.getItem('clothes'));
    newData.sort(function (a, b) {
        return a.price - b.price;
    })
    appendItem(newData)
    
}

function sortphl() {
    parent.innerHTML = null;
    let newData = JSON.parse(localStorage.getItem('clothes'));
    newData.sort(function (a, b) {
        return b.price - a.price;
    })
    appendItem(newData)
    
}


let sort = document.getElementById('sort');
sort.onclick = function () {
    sorting()
};

let itemavailableP = document.getElementById('item-available');
itemavailableP.innerHTML = `${itemavailable} items`;