
let user = { 
    namaDepan : 'cuk' ,
    namaBelakang : 'ndas' ,

    get fullName(){
        return `hallo nama saya ${this.namaDepan} dan nama belakang  ${this.namaBelakang}`
    },

    set fullName(isi){
        const tampung = isi.split(' ')
        this.namaDepan = tampung[0]
        this.namaBelakang = tampung[1]
    }


}

user.fullName = 'Allice Coopper'



console.log(user.namaDepan)
console.log(user.namaBelakang)
console.log(user.fullName)