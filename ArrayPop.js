/**
 * 
 * @param {*} array
 * @method ArrayPop
 * Entrée : ArrayPop(array = [2,4,3,1,2,23,5])
 * Sortie : [2,4,3,1,2,23]
 */
function ArrayPop(array = []){
    let result = [];
    let index = 0;

    for(let i=0;i<array.length-1;i++){
            result[index] = array[i];
            index++;
    }

    console.log(result);
}
let array = [2,4,3,1,2,23,5];
ArrayPop(array);

