// let bill = 4;
// let faktorial = 1; // 4 , 12 , 24 , 
// for( i = bill ; i >= 1 ; i--){ //4 , 3  2 , 1
//     faktorial = faktorial * i ; //  
// }

// console.log(faktorial)


function faktorial(n){
    if(n === 0) return 1;
    return n *  faktorial(n-1);// 
}

console.log(faktorial(4))

// 4 * faktorial(4-1)
// 4 * (3 * faktorial ( 3-1))
// 4 * (3 * (2 * faktorial ( 2-1)))
// 4 * (3 * (2 * 1 )))
