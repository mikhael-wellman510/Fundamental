let biodata = {
    nama: 'mikhael wellman',
    umur: 24 ,
    lokasi: 'bogor'
}

for(let key in biodata){
    console.log(key) // nama key (nama, umur , lokasi)
    console.log(biodata[key]) // (mikhael , 24 , bogor)
}