const biodata = {
    namaDepan : 'mikhael',
    namaBelakang : 'wellman',
    sapa(){
        console.log(`hallo ${this.namaBelakang}`)
    },
}

biodata.sapa()


const profil = {
    nama : 'mikhael',
    jurusan : 'multimedia' ,
    umur : 23 ,
    lokasi : 'bogor',
    perkenalan(){
        console.log(`hallo, nama saya ${this.nama} , saya kuliah jurusan ${this.jurusan} , saya berumur ${this.umur} , dan saya tinggal di ${this.lokasi}`)
    }
}

profil.perkenalan()