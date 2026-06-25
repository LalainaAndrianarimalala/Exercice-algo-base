/**
 * 
 * @param {*} firstArray 
 * @param {*} secondArray 
 * @method ArrayMerge
 * 
 * entrée : ArrayMerge([1,2],[3,4])
 * sortie : [1,2,3,4]
 * @returns Array
 *
 */
function ArrayMerge(arrayList = [])
{
    let arrayResult = [];
    let index = 0;

    arrayList.forEach(element => {
        for(i=0;i<element.length;i++){
            arrayResult[index] = element[i];
            index++;
        }
    });

    console.log(arrayResult);
    
    
}

let array = [[1,2],[3,4],[5,6,7,8],['Katsaka','Tsaramaso','Voanjobory']]

ArrayMerge(array);
