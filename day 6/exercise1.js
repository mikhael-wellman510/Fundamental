class Mahasiswa {
  constructor(nama , email , usia , score){
    this.nama  = nama,
    this.email = email ,
    this.usia = usia,
    this.score = score
   }

}
let mahasiswa1 = new Mahasiswa ('mikhael' , 'mikhaelwellman28@gmail.com' , 23 , 80)
let mahasiswa2 = new Mahasiswa ('barack' , 'barack@gmail.com' , 26 , 90)
let mahasiswa3 = new Mahasiswa ('jokowi' , 'jokowi@gmail.com' , 35 , 70)
let mahasiswa4 = new Mahasiswa ('prabowo' , 'prabowo@gmail.com' , 40 , 90)


let usia = [mahasiswa1.usia , mahasiswa2.usia , mahasiswa3.usia , mahasiswa4.usia];
let score = [mahasiswa1.score , mahasiswa2.score , mahasiswa3.score , mahasiswa4.score];


let result = {
  Score : {
    Max : Math.max(...score),
    Min : Math.min(...score),
    Average : score.reduce((a,b)=> a + b / score.length )
  },
  Usia :{
    Max : Math.max(...usia),
    Min : Math.min(...usia),
    Average : usia.reduce((a,b)=> a + b / usia.length )

  }
}

console.log(result);





