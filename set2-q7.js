

for(let i = 1; i<=1000; i++){
let n = i
let t = n

let numberOfDigits = 0
    
    // let number_of_digits = 0
    
    while(n>0){
      let last = n%10 
      numberOfDigits++ // 4
      n = parseInt(n/10)
    }
    // n = 0
    
    n = t
    let sum = 0
    while(n>0){
       let last = n%10
       sum = sum+ last**numberOfDigits
       n = parseInt(n/10)
    }
    // n==0
    
    if(sum == t){
      console.log("YES")
    }
    else{
      console.log("NO")
    }
    
}