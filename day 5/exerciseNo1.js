let arr = [9,5,7,2,8,6,3,11];

const crot = (n) => {

    const tertinggi = Math.max.apply(Math, n); // 11
    const terendah = Math.min.apply(Math,n); //2 
    const tengah = n.reduce((a , b )=> a + b / n.length)
    

    

    console.log(`Nilai tertinggi adalah ${tertinggi}`);
    console.log(`Nilai terendah adalah ${terendah}`);
    console.log(`Nilai rata-rata adalah ${tengah}`);


}

crot(arr);


