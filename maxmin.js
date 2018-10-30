'use strict';
function max(numbers){
  if (numbers.length ===0){
    return null;
  }

  let max = numbers[0];
  let i = 1;
  while(i<numbers.length){
    if(numbers[i]>max){
      max = numbers[i];
    }
    i++;
  }

  return max;
}

function min(numbers){
  if (numbers.length ===0){
    return null;
  }

  let min = numbers[0];
  let i = 1;
  while(i<numbers.length){
    if(numbers[i]<min){
      min = numbers[i];
    }
    i++;
  }

  return min;

}
