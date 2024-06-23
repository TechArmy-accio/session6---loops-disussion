// 1
// 23
// 345
// 4567
// 56789




for(let line = 1; line<=26; line++){

    let str = ""
    let x = line // 5
    for(let col = 1; col<=line; col++){
        //  let y = x+64
        // str = str + y
        str = str + String.fromCharCode(x+64) 
        // x = 4
        x++
        if(x==27){
            x = 1
        }

    } 
    console.log(str)
}

// line = 4, str = "" ,  x = 4  col = 1-4

// col = 1 
// str = str + x = "" + 4 = "4" ,  x = 5

// col = 2
// str = str + x ="4" + 5 = "45" , x = 6

// col = 3
// str = str + x = "45" + 6 = "456" , x = 7 

// col = 4
// str = str + x = "456" + 7 = "4567" , x = 8


// line  = 5





// for(let i = 1; i<=5; i++){
//     for(let j = 1; j<=5; j++){
//         console.log(i)
//     }
// }

// for(let i = 1; i<=10; i++){
    
// }