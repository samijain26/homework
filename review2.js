
////////////////Easy Going//////////////////////////////

for (let i =1 ; i <= 20 ;  i ++){
    console.log("Easy Going answered  " + i)

}


//////////////////////////Get Even  //////////////////

for (let i = 0 ; i <= 200 ; i++){
    if( i % 2 === 0){
        console.log("Get Even Answered  " + i)
    }
}

////////////////////////////////Fizz Buzz///////////////////

function fizzBuzz(start,finish) {
    for(let i = start ; i <=finish ; i ++){
    

         if (i % 3 === 0 && i % 5 === 0) {
            console.log(" FizzBuzz");
         }else if (i % 3  === 0) {
              console.log(" Fizz");
         } else if (i % 5 === 0) {
              console.log(" Buzz");
         }else {
              console.log(i);
        
        }
    }
    
}
    
fizzBuzz(1,100);
console.log("Fizz Buzz Answered")

//////////////////////////////////////WIld Wild Life/////////////

const wolfy = [ "Wolfy" , "wolf" ,16,"Yukon Territory"]
const sharky = ["Sharky","shark",20,"left Coast"]
const plantee = [ "Plantee","plant",5000,"Mordor"]
const porgee = ["Porgee", "Porg", 186,"Ahch-To"]
const dart = ["D'Art","Demogorgan Dog",2,"Upside Down"]

plantee[2]++     //making plantee 1 more year older

wolfy[3] = "Gotham City"   //changing wolfy home town

dart.push("Hawkins")      //adding a second home

wolfy.shift()          //deleting wolfy name beginning of array

wolfy.unshift("Gameboy")     //adding a new name to wolfy beginning of array


console.log("Wild life answered")

//////////////////////////////////////////Yell at Ninja Turtle///////////

const ninja = ["donatello","Leonardo","Rapheal","Michaelangelo"]
for( let item of ninja){
    

    console.log(item.toUpperCase())
}

///////////////////////////Methods revisited answered/////////////

const favMovies =["Jaws","The Felloship of the Ring","Howl's Moving Castle","Dijango uncle"]