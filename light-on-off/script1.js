var mdiv = document.querySelector("#container")
var image = document.querySelector("#imgonoff")
var button = document.querySelector("#button")
var div = document.querySelector("#onoff")
var div2 =document.querySelector("#text")

let bulbOn = "light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png"
let bulbOff = "light-bulb-on-off-png-11553940208oq66nq8jew.png"

//EVENT LISTERNER TO TURN BULB ON AND OFF


button.addEventListener("click",(event)=>{


   image.src=""
    mdiv.style.backgroundColor="orange"
   div.style.backgroundColor="cyan"
   console.dir(image.src)
   image.src=bulbOn
    div2.innerHTML="<h1>Bulb turned ON<h1>"
    
  button.addEventListener("click",(event)=>{
    image.src=""
        mdiv.style.backgroundColor="purple"
        div.style.backgroundColor="yellow"
        console.dir(image.src)
       image.src=bulbOff
         div2.innerHTML="<h1>Bulb turned off<h1>"

        
 })
    }) 


