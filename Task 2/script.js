// console.log(document.getElementsByTagName("img"));
// console.log(document.images);


// console.log(document.getElementsByName("City")[0].querySelectorAll("option"));


// console.log(document.getElementsByTagName("table")[1].querySelectorAll("tr td"));


// console.log(document.getElementsByClassName("fontBlue bGrey"));



//////////////////////////// Task 2

let slideshow = new Object();
slideshow.timerId= null;

function startSliding(ImgObject) {
    let counter = 1;
    slideshow.timerId = setInterval(()=>{
        counter++;
        if (counter > 4)
            counter = 1
        
        ImgObject.src = `images/${counter}.jpg`
    } , 1000)
}

/////////////////////////// Task 3

let sliderImg = document.images[0];


let counter = 1
document.getElementById("next").onclick = ()=>{
    counter++;
    if(counter > 4)
        counter = 4
    sliderImg.src = `images/${counter}.jpg`
    
}

document.getElementById("previous").onclick = ()=>{
    counter--;
    if(counter < 1)
        counter = 1
    sliderImg.src = `images/${counter}.jpg`
    
}

document.getElementById("slideshow").onclick = ()=>{
    if(slideshow.timerId == null)
        startSliding(sliderImg , 2)
}

document.getElementById("stop").onclick = ()=>{    
    clearInterval(slideshow.timerId)
    slideshow.timerId = null
}
