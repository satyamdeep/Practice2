// Practice 1

//  let number = prompt("Enter a number");

//  console.log("number is =", number);

//  if( number % 5 === 0){
//     console.log(number,"is multiple of 5");
//  }
//  else{
//     console.log(number,"is not a multiple of 5");
//  }

//Practice 2

console.log("Enter your Score");
let score = prompt("Enter Score");

if(score>=90 && score<=100){
    console.log("Score is", score,"Grade A");
}
else if (score>=70 && score<=89){
    console.log("Score is", score,"Grade B");
}
else if (score>=50 && score<=69){
    console.log("Score is", score,"Grade C");
}
else if (score>=35 && score<=49){
    console.log("Score is", score,"Grade D");
}
else if (score>=0 && score<=34){
    console.log("Score is", score,"Fail");
}
else{
   alert("Invalid Input")
}