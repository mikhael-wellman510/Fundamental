class Biodata{
    constructor(nama,usia,jurusan){
        this.nama = nama ,
        this.usia = usia ,
        this.jurusan = jurusan
    }

    great(){
        console.log(`hallo ${this.nama} , saya berusia ${this.usia} , saya jurusan ${this.jurusan}`)
    }

    perkenalan(){
        return `hallo , nama saya ${this.nama}`
    }


}

const mikhael = new Biodata('mikhael' , 23 , 'Multimedia')

mikhael.great();

const tes = new Biodata('mikhael')
const mikhael1 = tes.perkenalan()

console.log(mikhael1);