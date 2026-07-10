/**
 * @method ArrayDoublon
 *
 * input : ['M','L','F','M','M','F','M','A','F','M'','M','A','M,'B','M','F','R'];
 * output : [M,L,F,A,B,R]
 * @param {*} array
 */

function ArrayDoublon(array = []){
    const vue = {};
    let Result = [];
    let index=0;
    for(let i=0;i<array.length;i++){
        const valeur = array[i];

        if(vue[valeur] === undefined){
            vue[valeur] = 1;
        }else{
            Result[index] = array[i];
            index++;
        }
    }

    console.log(Result);
    
}

const tableau = ["M","L","S","M","R","K","R","O","S"];
ArrayDoublon(tableau);