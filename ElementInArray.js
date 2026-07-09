/**
 * @method ElementInArray
 *
 * input : ['M','L','F','M','M','F','M','A','F','M'','M','A','M,'B','M','F','R'];
 * output : [M,L,F,A,B,R]
 * @param {*} array
 */
function ElementInArray(array = []) {
  let arrayResult = [];
  let index = 0;

  for(let i=0;i<array.length;i++){

    for(let j=0;j<array.length;j++){

      if(array[i] !== array[j]){
        let dejaAjoute = false;

        for(let k=0;k<index+1;k++){
          if(arrayResult[k] === array[i]){
            dejaAjoute = true;
            break;
          }
        }

        if(!dejaAjoute){
          arrayResult[index] = array[i];
          index++;
        }
      }
    }
  }

  console.log(arrayResult);
  
}

array = ['M','L','F','M','M','F','M','A','F','M','M','A','M','B','M','F','R'];
ElementInArray(array);
