

// let a = 10 
// let b = 15


// a,b => which is div by 4, 8, 16


let flag = false
for(let i = 10; i<=20; i++){
     if(i%4 == 0 && i%8 == 0 && i%16 == 0){ // 16
         console.log(i) //16
         flag = true
     }
    //  else{
    //         console.log("Not found")
    //  }
}



if(flag == false){
    console.log("Not found")
}