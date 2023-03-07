// const Student = class {
//     constructor(name, email, birthdate, score) {
//      this.name = name;
//      this.email = email;
//      this.birthdate = new Date(birthdate);
//      this.score = score;
   
//      this.age = Math.floor(
//       (new Date() - new Date(birthdate)) / (1000 * 60 * 60 * 24 * 365)
//      );
//     }
//    };
   
 
//    const HLA = class {
//     constructor(Highest, Lowest, Average) {
//      this.Highest = Highest;
//      this.Lowest = Lowest;
//      this.Average = Average;
//     }
//    };
   
//    let udin = new Student('udin', 'udin@mail.com', '1996/01/21', 100);
//    let ujang = new Student('ujang', 'ujang@mail.com', '1999/05/21', 20);
//    let richard = new Student('richard', 'r@mail.com', '1998/03/21', 90);
   
   
//    const students = [udin, ujang, richard]; // di jadikan array 
//    console.log(students);
//    const calculate = (students = []) => {
//     const findMin = (arr = [], type = 'age') =>
//      arr.reduce((min, value) => {
//       return value[type] < min[type] ? value : min;
//      })[type];
   
   
   
//     const findMax = (arr = [], type = '') =>
//      arr.reduce((min, value) => {
//       return value[type] > min[type] ? value : min;
//      })[type];
   
//     const findAvg = (arr = [], type = '') =>
//      (
//       arr.reduce((avg, value, idx) => {
//        return idx == 1 ? avg[type] + value[type] : avg + value[type];
//       }) / arr.length
//      ).toFixed(2);
   
    
   
//     let Score = new HLA(
//      findMax(students, 'score'),
//      findMin(students, 'score'),
//      findAvg(students, 'score')
//     );
   
//     let Age = new HLA(
//      findMax(students, 'age'),
//      findMin(students, 'age'),
//      findAvg(students, 'age')
//     );
//     return { Score: { ...Score }, Age: { ...Age } };
//    };
   
//    console.log(calculate(students));
   
let data = [
    { nama: "A", email: "a@example.com", umur: 25, score: 80 },
    { nama: "B", email: "b@example.com", umur: 30, score: 90 },
    { nama: "C", email: "c@example.com", umur: 27, score: 75 },
    { nama: "D", email: "d@example.com", umur: 35, score: 85 },
    { nama: "E", email: "e@example.com", umur: 28, score: 95 },
    
  ];
  
  let umurMax = 0 // 30 -infinity
  let scoreMax = 0 // 90 -infity
  let umurMin = Infinity
  let scoreMin = Infinity

  let rataUmur = []
  let rataScore = []

  
  
  
  for (let i = 0; i < data.length; i++) {
      let umur = data[i].umur; //  27
      let score = data[i].score; //  75
      rataUmur.push(umur)
      rataScore.push(score)
      // let rata2 = rata.reduce((a,b)=> a + b / data.length)
      
      
      if (umur > umurMax) { // 25 > 0
        umurMax = umur;
    }
    if (score > scoreMax) {
      scoreMax = score; // untuk assignment ke scoreMax
    }
    if(umur < umurMin){ //  25 < 
        umurMin = umur
    }
    if(score < scoreMin){
        scoreMin = score
    }
}

// *** pertanyaaan 
// let tampung = rataUmur.reduce((a,b) => a + b / data.length) // 25 + 30
// console.log(tampung) *** ini kenapa salah

let result = {
    
    Umur : {
        tertinggi : umurMax,
        terendah : umurMin,
        Avarage : rataUmur.reduce((a,b)=> a+b) / data.length // 
        
        
        
        
    },
    Score : {
        tertinggi : scoreMax,
        terendah : scoreMin,
        Avarage : rataScore.reduce((a,b) => a + b) / data.length
    }
  }
//   console.log("Nilai tertinggi umur: " + umurMax);
//   console.log("Nilai tertinggi score: " + scoreMax);
  
console.log(result)


// a = 5;
// b = 7;
// c = b / 0;
// console.log(c)