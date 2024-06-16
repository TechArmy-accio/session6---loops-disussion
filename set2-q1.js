



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
  let a = parseInt(input[0]) // 10
  let b = parseInt(input[1]) // 20
  
  let small 
  
  if(a<=b){
     small = a
  }
  else{
    small = b
  }
  
  
  // HCF => highest common factor 
  
  // a => 1,2,5,10 
  // b => 1,2,4, 5, 10,20
  let hcf
  for(let i = 1; i<=small; i++ ){
      if(a%i ==0 && b%i==0){
           hcf = i // 1,2, 4
      }
  }
  
  console.log(hcf)
  
  
  // a*b = lcm * hdf 
  
  let lcm = a*b/hcf
  
  console.log(lcm)
  
  
  
  
  
  // LCM => Lowest common  Multiple
  
 


  
});


















