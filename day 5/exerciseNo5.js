let buah1 = ['apel' , 'mangga' , 'jambu'];

function buah(n){

    if(!buah1.includes(n)){
        buah1.push(n);
        console.log(buah1)
    }else{
        console.log(`buah ${n} , sudah ada`)
    }

}

buah('apel')
