class Karyawan {
    constructor(nama){ // mikhael 
        this.nama = nama;
        
    }

    menghitungGaji(jam){ // 8 jam ... // lembur 75000
      let gaji = []; // 8 * 100000 ==
      if(jam > this.jamKerjaMax){ // ... > 8 jam  > 6 jam
        let lembur = jam - this.jamKerjaMax;  // 8 - 6 

        gaji += (lembur * this.lembur) + (this.jamKerjaMax * this.gajiPerJam) // 2 * 75.000 
      }else{
        gaji += jam * this.gajiPerJam
      }
      return gaji
    }
}


class Fulltime extends Karyawan {
    constructor(nama){ // mikhael
        super( nama ); // mikhael
        this.gajiPerJam = 100000;
        this.jamKerjaMax = 6;
        this.lembur = 75000
        
    }

}

class PartTime extends Karyawan {
    constructor(nama){ // barak 
        super(nama );
        this.gajiPerJam = 50000;
        this.jamKerjaMax = 6 ;
        this.lembur =30000
    }
}

const FullTimeKaryawan = new Fulltime('mikhael'); // menampung isi object yang ada di fulltime
const PartTimeKaryawan = new PartTime('barak'); // nama di constructor


const mikhaelSalary = FullTimeKaryawan.menghitungGaji(6); // masuk ke method menghitung gaji
const barakSalary = PartTimeKaryawan.menghitungGaji(6);



console.log(`${FullTimeKaryawan.nama} mendapatkan gaji : ${mikhaelSalary}`)
console.log(`${PartTimeKaryawan.nama} mendapatkan gaji : ${barakSalary}`)