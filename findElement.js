/**
 * @method findElement
 * @param {*} array 
 * @param {*} element
 * 
 * Entrée : findElement(array = [1,'test',3,'Autre',5,'kalach',3,5,"mort"],element=1)
 * Sortie attendu : 1 se trouve dans 1 colonne du tableau
 */
function findElement(array = [],element = 0 || ''){
    let result = [];
    let index = 0;
    let rowResult = [];

    for(let i=0;i<array.length;i++){
        if(array[i] === element){
            result[index] = array[i];
            rowResult[index] = i+1;
            index++;
        }
    }
    console.log(element+" se trouve dans "+rowResult+" colonne du tableau");

}

let array = [1,'test',3,'Autre',5,'kalach',3,5,"mort"];
let element = 1;

findElement(array,element);