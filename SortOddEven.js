/**
 * @param array
 * @method SortOddEven
 * 
 * Entré : array([1,2,3,4,5,6,7,8,9])
 * Sortie : [2,4,6,8,1,3,5,7,9]
 */
function SortOddEven(array = []){

    let even = [];
    let odd = [];

    let evenIndex=0;
    let oddIndex = 0;

    for(let i=0;i<array.length;i++){
        if(array[i] % 2 === 0){
            even[evenIndex] = array[i];
            evenIndex++;
        }else{
            odd[oddIndex] = array[i];
            oddIndex++;
        }
    }

    let Result = [];
    let index = 0;

    for(let i=0;i<even.length;i++){
        Result[index] = even[i];
        index++;
    }

    for(let i=0;i<odd.length;i++){
        Result[index] = odd[i];
        index++;
    }

    console.log(Result);
}

let array = [1,2,3,4,5,6,7,8,9];

SortOddEven(array);