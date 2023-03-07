// function rekursif(n){
//     if(n === 0){
//         return ;
//     }

//     console.log(n)
//     return rekursif(n - 1)
// }

// rekursif(8);

function faktorial(n){ // 20 15 
    if(n === 0){
        return 1
    }
    return n * faktorial(n - 1) // 5 * 4 * 3 * 2 * 1 * 1
}

console.log(faktorial(5))