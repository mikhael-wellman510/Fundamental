// class User {
//     nama = '';

//     constructor(nama){
//         this.nama = nama;
//     }

//     salam(){
//         console.log(`hallo ${this.nama}`)
//     }
// }

// const panggil = new User('Mikhael'); // ** ini masuk ke constructor

// panggil.salam()


class User {
    nama = ' '

    constructor(nama){
        this.nama = nama
    }

    sapa(){
        console.log(`hallo bang ${this.nama}`)
    }
}


const panggil = new User('mikhael') ;

panggil.sapa()
