// Fungsi makeAllCaps
function makeAllCaps(array) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array)) {
        return reject(new Error("Parameter harus berupa array"));
      }
  
      const allCapsArray = array.map((word) => {
        if (typeof word !== "string") {
          return reject(
            new Error("Semua elemen dalam array harus berupa string")
          );
        }
        return word.toUpperCase();
      });
      resolve(allCapsArray);
    });
  }
  
  // Fungsi sortWords
  function sortWords(array) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array)) {
        return reject(new Error("Parameter harus berupa array"));
      }
  
      const sortedArray = array.sort();
      resolve(sortedArray);
    });
  }
  
  // Contoh penggunaan
  const arrayOfWords = ["cucumber", "tomatos", "avocado"];
  const complicatedArray = ["cucumber", "44", "true"];
  
  makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then((result) => {
      console.log(result); // Output: [ 'AVOCADO', 'CUCUMBER', 'TOMATOS' ]
    })
    .catch((error) => {
      console.log(error);
    });
  
  makeAllCaps(complicatedArray)
    .then(sortWords)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error); // Output: Error: Semua elemen dalam array harus berupa string
    });