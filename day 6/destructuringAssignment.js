// let a, b ;
// [a,b] = [10,20]

// console.log(a)
// console.log(b)


// let mobil = {
//     kaca : '4 kaca',
//     roda : '4 roda',
// }

// let {kaca,roda} = {...mobil}

// console.log(kaca)


// let data1 = [1,2,3];
// let data2 = [4,5,6];

// let data = [...data1,...data2];

// console.log(data)



const target = {a : 1 , b:2 };
const source = {b: 4 , c: 5};
const source2 = {b: 6 , d: 5}

Object.assign(target,source,source2);


console.log(target)


let a = 1 
let b = '2'



console.log(Boolean(a,b))