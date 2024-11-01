let basket = document.images[0];

let lost = 0
let taken = 0
const shift = 50;
const eggWidth = 100;
const basketWidth = 200;


/////////////////////////////////////////////////

function CreateRandomEgg(interval) {
  let egg = document.createElement("img");
  egg.src = "Images\\original.png";
  document.body.appendChild(egg);

  let randomLeft = Math.ceil(Math.random() * (window.innerWidth - eggWidth));
//   console.log(randomLeft);

  egg.width = eggWidth;
  egg.style.left = randomLeft + "px";
  egg.style.top = -egg.width + "px";

  MoveEgg(egg,interval)
  return egg;
}

/////////////////////////////////////////////////

function MoveEgg(egg , interval) {
    let newTop = 0;
    
    let id = setInterval(() => {
      // debugger;
      if (((newTop ) + "px" >= window.getComputedStyle(basket).top ) && (egg.style.left >= basket.style.left) && (egg.style.left <= parseInt( basket.style.left) + 200 + "px")) {
      console.log("taken");
    
      egg.parentElement.removeChild(egg)

      newTop = 0
      clearInterval(id)

      egg = CreateRandomEgg(interval);
      taken++
      } 
      else if(newTop <= window.innerHeight - .75* basketWidth){
        newTop += shift;
        egg.style.top = newTop + "px";
      }
      else {
      egg.src = "Images\\broken.png";
      clearInterval(id)

      setTimeout(() => {
      egg.parentElement.removeChild(egg)
      
      newTop = 0
      egg = CreateRandomEgg(interval);
      lost++

        }, 1200);

      }


    }, interval);
  }

/////////////////////////////////////////////////

CreateRandomEgg(400);
CreateRandomEgg(600);
CreateRandomEgg(700);
CreateRandomEgg(1000);
CreateRandomEgg(2000);

/////////////////////////////////////////////////

basket.onmousemove=(event)=>{

if (event.clientX <= window.innerWidth -  basket.width/2 && event.clientX >=  basket.width/2 ) {
basket.style.left = (event.clientX - basket.width/2 )  + "px";
}
}
