function order(words){
  //split by ' ', make push words into array, split each word and identify number, fetch index and order both arrays by ascending order
  
  const tempMemory = words.split(' ');
  console.log(tempMemory);
  let sorted = [];
  let result = [];
  
  tempMemory.forEach(function(element, i){
    let tempArr = element.split('');
    let elementMem = [];
    let index;
    tempArr.forEach(function(character, ii){
      elementMem.push(character);
      if (!isNaN(Number(character))){
        index = character
        console.log(index);
      }
    })
   let resElement = elementMem.join('');
   result[index - 1] = resElement;
  })
  return result.join(' ');
}

order("4of Fo1r pe6ople g3ood th5e the2")
order("is2 Thi1s T4est 3a")


//Best Solution:
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}   