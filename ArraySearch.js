/**
 * @method ArraySearch
 * @param {Array} array - Le tableau
 * @param {string} element - La chaîne à chercher
 * @returns {Array} - Les éléments contenant la chaîne
 */
function ArraySearch(array, element) {
  const result = new Array(array.length);
  let resultIndex = 0;
  
  // Boucle 1 : Parcourir le tableau
  for (let i = 0; i < array.length; i++) {
    const item = array[i] + ""; // Convertir en string
    let found = false;
    
    // Boucle 2 : Chercher la sous-chaîne
    for (let j = 0; j < item.length; j++) {
      let match = true;
      
      // Boucle 3 : Comparer les caractères
      for (let k = 0; k < element.length; k++) {
        if (item[j + k] !== element[k]) {
          match = false;
          break;
        }
      }
      
      if (match) {
        found = true;
        break;
      }
    }
    
    if (found) {
      result[resultIndex] = array[i];
      resultIndex++;
    }
  }
  
  // Créer le tableau final
  const finalResult = new Array(resultIndex);
  for (let i = 0; i < resultIndex; i++) {
    finalResult[i] = result[i];
  }
  
  return finalResult;
}


// ============ TESTS ============

console.log("Test 1:");
const test1 = ArraySearch(
  ["Test 1", 2, "Retest 3", 4, 5, 4.5, "Autre", "AutreRe"],
  "test"
);
for (let i = 0; i < test1.length; i++) {
  console.log(test1[i]);
}

console.log("\nTest 2:");
const test2 = ArraySearch(
  ["apple", "banana", "apricot"],
  "ap"
);
for (let i = 0; i < test2.length; i++) {
  console.log(test2[i]);
}