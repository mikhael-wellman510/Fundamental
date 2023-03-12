const obj1 = {
    nama : 'mikhael',
    email : 'mikhaelWellman28@gmail.com'
}

const obj2 = { 
    jurusan : 'Multimedia',
    kuliah : 'Polimedia'
}

const final = {...obj1, ...obj2}
console.log(final)


const data1 = [1,2,3];
const data2 = [4,5,6];

const hasil = [...data1 , ...data2]
console.log(hasil)