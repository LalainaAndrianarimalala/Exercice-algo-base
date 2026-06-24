/**
 * @method CountElement
 * Entrée : CountElement(array = [
 *  5, 2, 8, 1, 4, 9, 3, 7, 6, 1,
  8, 5, 2, 9, 4, 3, 7, 1, 6, 8,
  3, 5, 9, 2, 4, 7, 1, 6, 8, 3,
  9, 5, 2, 4, 7, 1, 6, 8, 3, 9,
  4, 5, 2, 7, 1, 6, 8, 3, 9, 4,
  7, 5, 2, 1, 6, 8, 3, 9, 4, 7,
  1, 5, 2, 6, 8, 3, 9, 4, 7, 1,
  6, 5, 2, 8, 3, 9, 4, 7, 1, 6,
  8, 5, 2, 3, 9, 4, 7, 1, 6, 8,
  3, 5, 2, 9, 4, 7, 1, 6, 8, 5],element = 2)

  
 * Sortie : element 2 est trouvé 10 fois dans 2,13,24,33,43,53,63,73,83,93 em colonne
 */
function CountElement(array = [],element = 0 || ''){
   let result = [];
   let indexResult = 0;
   let rowResult = [];

   for(let i=0;i<array.length;i++){
    if(array[i] === element){
        result[indexResult] = array[i];
        rowResult[indexResult] = i+1;
        indexResult++;
    }
   }

   console.log("element "+element+" est trouvé "+result.length+" fois dans "+rowResult+" em colonne");
}

let array = [5, 2, 8, 1, 4, 9, 3, 7, 6, 1,
  8, 5, 2, 9, 4, 3, 7, 1, 6, 8,
  3, 5, 9, 2, 4, 7, 1, 6, 8, 3,
  9, 5, 2, 4, 7, 1, 6, 8, 3, 9,
  4, 5, 2, 7, 1, 6, 8, 3, 9, 4,
  7, 5, 2, 1, 6, 8, 3, 9, 4, 7,
  1, 5, 2, 6, 8, 3, 9, 4, 7, 1,
  6, 5, 2, 8, 3, 9, 4, 7, 1, 6,
  8, 5, 2, 3, 9, 4, 7, 1, 6, 8,
  3, 5, 2, 9, 4, 7, 1, 6, 8, 5
];
let element = 2;

CountElement(array,element);