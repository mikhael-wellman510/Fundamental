//  **** clas declaration

class User {
    greeting(){
        console.log(`hello world`)
    }
}

const sapa = new User() // buat dulu variable
sapa.greeting() //  masukan nama variable dan panggil function nya




// **** class expression
const panggil = new class {
    nama(){
        console.log(`hallo bang Mikhael`)
    }
}

panggil.nama()



// const User = new class {
//     greeting() {
//         console.log('hello world')
//     }
// }

// User.greeting()

