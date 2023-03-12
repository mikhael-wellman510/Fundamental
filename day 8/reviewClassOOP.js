class Biodata{
    constructor(nama,usia,jurusan,lokasi){
        this.nama = nama;
        this.usia = usia;
        this.jurusan = jurusan;
        this.lokasi = lokasi
    }

    keterangan(){
        return `hallo nama saya ${this.nama} ,  saya berusia ${this.usia} , saya jurusan ${this.jurusan},dan saya tinggal di ${this.lokasi}`
    }

    tes(){
        return `saya ${this.nama}`
    }
}


let mikhael = new Biodata('Mikhael Wellman' , 20 , "Multimedia" , "Kota Bogor");
const t = mikhael.tes()
console.log(t)