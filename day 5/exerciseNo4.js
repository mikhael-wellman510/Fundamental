let a = [1,2,3];
let b = [3,2,1];
let tampung = []


const crot = ((arr1,arr2)=>{

    for(i = 0 ; i < arr1.length ; i++){
        tampung[i] = arr1[i] + arr2[i] 
    }

    return tampung
})



console.log(crot(a,b))