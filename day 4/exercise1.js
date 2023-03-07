function createTriangle(height) {
    let triangle = ''; 
    let count = 01; //2 // 3 // 4 // 5 // 6 // 7b 
    for (let i = 0; i < height; i++) { //1 ,2 , 3 , 
      for (let j = 0; j <= i; j++) { //
        triangle += count.toString().padStart(2, '0') + ' '; // 
        count++;
      }
      triangle = triangle + '\n';//
      
    }
    return triangle;
  }

  console.log(createTriangle(4));





  

 