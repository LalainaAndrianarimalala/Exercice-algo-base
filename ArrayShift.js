/**
 * 
 * @param {*} array
 * @method ArrayShift
 * Entrée :  ArrayShift([23,24,25,26])
 * Sortie :  [24,25,26]
 */
function ArrayShift(array = []){
    let result = [];
    let index = 0;

    for(let i=1;i<array.length;i++){
        result[index] = array[i];
        index++;
    }
    console.log(result);
}

let array = [23,24,25,26];
ArrayShift(array);