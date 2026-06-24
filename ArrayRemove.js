/**
 * @method ArrayRemove
 * @param {*} array 
 * @param {*} element 
 * 
 * Entrée : ArrayRemove(array = [0,1,2,5],element=1)
 * Sortie : [0,2,5]
 */
function ArrayRemove(array = [],element=0){
    let result = [];
    let index = 0;
    for(i=0;i<array.length;i++){
        if(array[i] !== element){
            result[index] = array[i];
            index++;
        }

    }
    console.log(result);
    
}

let array = [0,1,2,5];
let element = 1;

ArrayRemove(array,element);