// set interval to the text of box-1 nood club

let noordClubText = [
    {
        line1: "Pick Up Today-in Store or curbside",
        line2: "",
        line3 : "Set Your Store"
    },
    {
        line1: "Get a $60 Bonus Note!",
        line2: "And shop Anniversary Sale early as a new Nordstrom credit cardmember. Offer ends July 27. Restrictions apply.",
        line3: "Apply Now"
    }
]



let i = 0;
function appendnoordClubTextDiv() {
    let noordClubTextDiv = document.getElementById('noord-club-text-div');
    noordClubTextDiv.innerHTML = null;

    if (i > 1) {
        i = 0;
    }

    let pOne = document.createElement('p');
    pOne.innerHTML = `<strong>${noordClubText[i].line1}</strong>`;
    let pTwo = document.createElement('p');
    pTwo.innerHTML = `<span>${noordClubText[i].line2}</span>`;
    let a = document.createElement('a');
    a.href = "#";
    a.innerHTML = `<span>${noordClubText[i].line3}</span>`
    noordClubTextDiv.append(pOne,pTwo,a)


    i++;

}


setInterval(function () {
    appendnoordClubTextDiv()
}, 4000);


// box 1 functionality ends here text is changing


//box-3 functionality starts
//Health and glow images changing functionality

let healthGlowImg = ["images/indexImg/healthyGlow/d1.jpeg", "images/indexImg/healthyGlow/d2.jpeg"];
let j = 0;
function appendhealthGlowImgDiv() {
    let healthGlowimgDiv = document.getElementById('health-glow-img-div');
    healthGlowimgDiv.innerHTML = null;

    if (j > 1) {
        j = 0;
    }

    let myImg = document.createElement('img');
    myImg.src = healthGlowImg[j];
    healthGlowimgDiv.appendChild(myImg)


    j++;

}
setInterval(function () {
    appendhealthGlowImgDiv()
}, 4000);
