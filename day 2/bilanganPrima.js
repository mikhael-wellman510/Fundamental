let tampungHasil = [];

for(let i = 1 ; i <= 12 ; i++){
    let tampung = 0;
    for(let j = 1 ; j <= i ; j ++){
        if(i % j == 0){
        tampung ++}
    }

    if(tampung === 2){
        tampungHasil = [...tampungHasil,i]
    }
}

console.log(tampungHasil)