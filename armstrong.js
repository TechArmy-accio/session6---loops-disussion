

// 153 => 1^3 + 5^3 + 3^3 = 153

// 1056 => 1^4 + 0^4 + 5^4 + 6^4



let m = 0
let n = 5000


for(let i = m; i<=n; i++){

     let n = i 
    // count number of digits
    // 567
    let count = 0
     while(n>0){
        // let last  = n%10
       count++
       n = parseInt(n/10)
     }
    // let str = n.toString()
    // let length = str.length
    // let str = String(n)
    n = i
     let sum = 0
    while(n>0){
        let last  = n%10
         sum = sum + last ** count
        n = parseInt(n/10)
    }

    if( i == sum){
        console.log(i)
    }   


}