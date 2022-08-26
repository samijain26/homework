
////////////////Easy Going//////////////////////////////

// for (let i =1 ; i <= 20 ;  i ++){
//     console.log( i)

// }


//////////////////////////Get Even  //////////////////

// for (let i = 0 ; i <= 200 ; i++){
//     if( i % 2 === 0){
//         console.log( i)
//     }
// }

////////////////////////////////Fizz Buzz///////////////////

// function fizzBuzz(start,finish) {
//     for(let i = start ; i <=finish ; i ++){
    

//          if (i % 3 === 0 && i % 5 === 0) {
//             console.log(" FizzBuzz");
//          }else if (i % 3  === 0) {
//               console.log(" Fizz");
//          } else if (i % 5 === 0) {
//               console.log(" Buzz");
//          }else {
//               console.log(i);
        
//         }
//     }
    
// }
    
// fizzBuzz(1,100);


//////////////////////////////////////WIld Wild Life/////////////

// const wolfy = [ "Wolfy" , "wolf" ,16,"Yukon Territory"]
// const sharky = ["Sharky","shark",20,"left Coast"]
// const plantee = [ "Plantee","plant",5000,"Mordor"]
// const porgee = ["Porgee", "Porg", 186,"Ahch-To"]
// const dart = ["D'Art","Demogorgan Dog",2,"Upside Down"]

// plantee[2]++     //making plantee 1 more year older

// wolfy[3] = "Gotham City"   //changing wolfy home town

// dart.push("Hawkins")      //adding a second home

// wolfy.shift()          //deleting wolfy name beginning of array

// wolfy.unshift("Gameboy")     //adding a new name to wolfy beginning of array




//////////////////////////////////////////Yell at Ninja Turtle///////////

// const ninja = ["donatello","Leonardo","Rapheal","Michaelangelo"]
// for( let item of ninja){
    

//     console.log(item.toUpperCase())
// }

///////////////////////////Methods revisited answered/////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas','The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes','Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

  //let jaws = "I am Jaws"
console.log(`Index of movie Titanic is: ${favMovies.indexOf("Titanic")}`)  //finding index of titanic
 
favMovies.sort()  //this method sort the array and mutate it and return reference to the same array.
console.log("Array after sort function is :  ", favMovies) 


favMovies.pop() //removes last elaement from array
console.log("deleted Volver from the end of array *** ",favMovies)


favMovies.push("Guardian of the Galaxy")  //push new element in the end
 console.log("pushed Guardian of the Galaxy in the end of array***** ", favMovies)


favMovies.reverse()   //reverse the current array element
 console.log("Reverse the array", favMovies)


favMovies.shift()    //removes first elament from array()
console.log("Deleted the  first item from beginning of array:", favMovies)

favMovies.unshift()   // adds new element in the beginning of array
console.log("Array after unshift", favMovies)


favMovies.splice(favMovies.indexOf("Django Unchained"),1,"Avtar")  /*first find the index of "Dijiango unchained"
 for the stating position of splice method and then removes this element and add
// "Avtar" in its place. */
 console.log("used splice to replace Django unchained with Avtar :",favMovies)

let midArray = Math.floor(favMovies.length/2)
console.log("length is : ", + midArray)
let sliceArr = favMovies.slice( midArray)  //slice  for middle of array
console.log("I am the sliced arry in the middle", sliceArr)
  //so original array still exist. slice array created a new array with required value.

  console.log("I am the original array :", favMovies)
  console.log("Index of Fast and furious is :",favMovies.indexOf("Fast and Furious"))  //we did not remove Fast and furious from the array

  //if Fast and furious is removed then array console.log would return -1

  //Declaring a array as const only means that you cannot assign 
 // a new value to that variable once a value has been assigned.but you
 //can do any array method to mutate the array


 /////////////////////////////////////////Where is Waldo/////////////////////////////////

 const whereIsWaldo = [["Timmy","Frank"],"Eggbert",["Lucinda","Jack","Neff","Snoop"],
 ["Petunia",["Baked Goods","Waldo"]]]

 //remove Eggbert from the array

 whereIsWaldo.splice(1,1)
 console.log("Removed Eggbert from array",whereIsWaldo)

 //change Neff to noone


 whereIsWaldo[1][2]="No One"

 console.log("replaced Neff with no one", whereIsWaldo)


 //////////////////////////////////Excited Kitten//////////////////////////////////

 let Msg = "Love me,pet me!Hssssss me !"
 for (let i = 1 ;i <= 20; i++){
    const msgArr = [".. human.. Why are you takin pictures of me?","...the catnip made me do it",
        "... why does the red dot always get away..."]

    if (i % 2 === 0){
        //console.log(Math.floor(Math.random()* msgArr.length))
        console.log(msgArr[Math.floor(Math.random()* msgArr.length)])
     }else{
        console.log(Msg)
     }
    
    
    

    }


    //////////////////////////////////FIND THE Median////////////////////////////////

    const num = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]

      //sortting the array to arrange number in increasing order
      console.log("sorted array is : " , num.sort())

      arrLength = num.length //finding array length
      console.log("Array lenght is : "+ arrLength)
      //if arry length is a even number then medeian is sum of 12th and 13th element in array
      //else median is 13th element in arry
     if (arrLength % 2 == 0){
        
       
        median = (num[(arrLength/2)] +num[(arrLength/2)+1])/2
        
     }else{
      
       median = num[Math.ceil(arrLength/2)]
      
     }
     console.log("The median is : " + median)




// ////////////////////////////////////

