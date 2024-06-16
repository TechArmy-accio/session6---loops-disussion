
//   *
//  ***
// *****
//*******
// *****
//  ***
//   *



let x = 1
let y = 3
for(let row = 1; row<=4; row++){
    let str1 = ""
    for(let j = 1; j<=y ;j++){
      str1 = str1 + " "
    }

    let str = ""
    for(let col = 1; col<=x; col++){
        str = str + "*"
    }
    console.log(str1+str)
    x = x+2
    y = y-1

}



