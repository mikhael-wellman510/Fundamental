// ** menggabungkan array

const dataOne = [1,2,3];
const dataTwo = [4,5,6];

const gabungan = [...dataOne,...dataTwo];
console.log(gabungan)

// ** menggabungkan object

const objectOne = {
    nama : 'Mikhael Wellman',
    kelas : 'multimedia'
}

const objectTwo = {
    email : 'mikhaelwellman28@gmail.com'
}

const hasil = {...objectOne,...objectTwo}
console.log(hasil)