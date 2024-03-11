let colorbox = document.getElementById("colorbox");
let button = document.getElementById("button");
let color;

let randomColor = () =>{
    color = "#";
    let hexaDecimal = "0123456789ABCDEF";

    for(let i=0; i<6;i++){
        color = color + hexaDecimal[Math.floor(Math.random()*16)];
    }
    return color;
}
button.addEventListener("click" ,()=>{
    colorbox.style.backgroundColor = randomColor();
    colorbox.textContent = color;
  })

  //The end//