function beratBadan(berat,tinggi){
    let hasil = berat / tinggi
  
    if(hasil <18.5){
        console.log(`less weight`)
    }else if(hasil > 18.5 && hasil < 24.9){
        console.log(`ideal`)
    }else if(hasil > 25.0 && hasil < 29.9){
        console.log('overWeight')
    }else if(hasil >30.0 && hasil < 39.9){
        console.log(`verry overweight`)
    }else{
        console.log('obesitas')
    }

    return 

}

beratBadan(60, 1.70)