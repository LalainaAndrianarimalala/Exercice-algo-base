/**
 * 
 * @param {*} tableau 
 * @param {*} element
 * @method ArrayPush
 * 
 * Entrée : ArrayPush(tableau=[0,1,2],element=5) 
 * Sortie : [0,1,2,5]
 */
function ArrayPush(tableau = [],element = 0){
    let array = [];
    for(i=0;i<tableau.length;i++){
        array[i] = tableau[i];
    }

    array[tableau.length] = element;
    console.log(array);
    
}

 let tableau = [0,1,2];
 let element = 5

ArrayPush(tableau,element);

