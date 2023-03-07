let b = ['mike' , 'bryan' ,'aldi', 'barak'];

const crot = (b) => {
    let tampung = ''
    for(i = 0 ; i < b.length ; i ++){
        
        
        if(i === 0 ){
            tampung += b[i]
        }else if(i === b.length - 1){
            tampung += ` & ${b[i]} `
        }else{
            tampung += `, ${b[i]}`
        }
    }
    console.log(tampung)
}

crot(b)















// const test = (i) => {


//     let tampung = '' // mike , bryan & barak
//     for(a = 0 ; a < i.length ; a++){

//         if(a === 0){
//             tampung += i[a]
//         }else if(a === i.length - 1 ){
//             tampung += `& ${i[a]}`
//         }
//         else{

//             tampung += ` , ${i[a]} `
//         }
        
        
//     }
//     console.log(tampung)
// }

// test(i)