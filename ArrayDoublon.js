/**
 * @method ArrayDoublon
 *
 * input : ["M","L","S","M","R","K","R","O","S"];
 * output : [ 'M', 'R', 'S' ]
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