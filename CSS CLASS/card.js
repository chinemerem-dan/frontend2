const display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn");


buttons.forEach(button=>{
button.addEventListener("click", ()=>{
    const value= button.textContent;
    // clear the character in the input
  if(value==="C"){
    display.value= "";
  }
  // to active the delete button to clear from right to left of the character in the input
  else if(value==="DEL"){
    display.value= display.value.slice(0,-1);
  }
  else if (value=== "="){
    
   try{
     const expression= (display.value.replace(/\^/g, "**"));  
   
     display.value= eval(display.value);
     display.value= eval(expression);
  
   }
   catch{
display.value= "Error";
 }
  }
  else{
    display.value +=value;
  }
  

 })
 });


 let result = 1;
let counter = 0;
while (counter < 10) {
  result += result * 2;
  counter = counter + 1;
}
console.log(result);

//   for ( myName=0; myName< 11; myName++) {
  
//     console.log(myName);

//   }
let count=0;
let total=0 ;
while (count <10) {
  total += count;
  count += 1;
}
  console.log(total);

