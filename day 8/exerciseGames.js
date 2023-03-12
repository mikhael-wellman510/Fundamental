class Employ{
    constructor(nama){
        this.nama = nama
    }

}

class Sallary extends Employ {
    constructor(nama , jam , type ){
        super(nama)
        this.jam = jam,
        this.type = type
    }
    hitungGaji(){
        let fullTime = 100000
        let lembur1 = 75000
        let partTime = 50000
        let lembur2 = 30000
        let jamMax = 6
        let lembur = this.jam - jamMax;

        let gaji = []
        if(this.type == 'full-timer'){
            if(this.jam > jamMax){
                gaji += (lembur * lembur1) + (jamMax * fullTime)
            }else{
                gaji += (this.jam * fullTime)
            }
        }

        else if(this.type == 'part-timer'){
            console.log("test");
            if(this.jam > jamMax){
                gaji += (lembur * lembur2) + (jamMax * partTime)
            }else{
                gaji += (this.jam * partTime);
            }
        }
        
        return gaji
    }
}


let mikhael = new Sallary('Mikhael' , 8 , 'full-timer');
let barack = new Sallary('barak' , 7 , 'part-timer')
let hasil = mikhael.hitungGaji()
let hasil2 = barack.hitungGaji()

console.log(hasil)
console.log(hasil2)
