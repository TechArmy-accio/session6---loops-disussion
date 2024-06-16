
const readline=require("readline");
const code=readline.createInterface({
  input:process.stdin
});
const userInput=[]
code.on("line" ,(data) =>
{
   userInput.push(data);
});
//ignore code above It
code.on ("close",() =>{
  let input = userInput 
  let n = parseInt(input[0]) // 0
  let t = n // 1204
  let isEven = false
  
  
  if(n == 0){
    console.log(0)
    isEven = true
  }
  
  // count zeros at end of a number: 
  let countNumberOfZeros = 0
  while(n>0){
    let last = n%10 
    
    if(last == 0){
        countNumberOfZeros++
    }
    else{
      break
    }
    n = parseInt(n/10)
  }
  // console.log(countNumberOfZeros)
  
  n = t
  
  
  // reverse logic
  let rev = 0
  while(n>0){
     let last = n%10
     rev = rev*10 + last
     n = parseInt(n/10)
     
  }
  
  // console.log("rev",rev) // 739
  // console.log("n",n)
  
  
   n = rev
  
  
  
  while(n>0){
    let last = n%10  // 9, 3,7
    if(last%2==0){
      console.log(last)
      isEven = true 
    }
    
    n = parseInt(n/10) // 73
  }
  
  
  
  for(let i = 1; i<=countNumberOfZeros; i++){
    console.log(0)
    isEven = true 
  }
  
  
  
  if(isEven == false){
    console.log(-1)
  }
  
});


















