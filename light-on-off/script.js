

var mdiv = document.querySelector("#container")
var image = document.querySelector("#imgonoff")
var button = document.querySelector("#button")
var div = document.querySelector("#onoff")
var div2 =document.querySelector("#text")

let bulbOn = "light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png"
let bulbOff = "light-bulb-on-off-png-11553940208oq66nq8jew.png"

//EVENT LISTERNER TO TURN BULB ON AND OFF


button.addEventListener("click",myonfunction)


function myonfunction(){
   
   
 console.log(image.attributes)
 //image.src.match would match part of the source string of image
  if(image.src.match("light-bulb-on-off-png")){
   image.src=bulbOn
   mdiv.style.backgroundColor="orange"
   div.style.backgroundColor="cyan"
   //console.dir(image.src)
    div2.innerHTML="<h1>Bulb turned ON<h1>"}
    else{
      image.src=bulbOff
      mdiv.style.backgroundColor="purple"
       div.style.backgroundColor="yellow"
       div2.innerHTML="<h1>Bulb turned off<h1>"
    }


}


