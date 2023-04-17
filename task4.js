//a
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.forEach(function(number) {
  if(number % 2 !== 0) {
    console.log(number);
  }
});
//b
const stringArray = ["welcome", "to", "guvi"];

const titleCapsArray = stringArray.map(function(str) {
  return str.toLowerCase().split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
});

console.log(titleCapsArray);
//c
const numbers = [2, 5, 6, 8, 10];

const sum = numbers.reduce(function(total, number) {
  return total + number;
}, 0);

console.log(sum);
//d
const numbers = [1, 2, 3, 4, 5,];

const primeNumbers = numbers.filter(function(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
});

console.log(primeNumbers);
//e
const words = ["car", "hello", "deified", "world"];

const palindromes = words.filter(function(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
});

console.log(palindromes);
//e
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = function(arr1, arr2) {
  const combinedArray = [...arr1, ...arr2].sort(function(a, b) {
    return a - b;
  });
  
  const middle = Math.floor(combinedArray.length / 2);
  
  if (combinedArray.length % 2 === 0) {
    return (combinedArray[middle - 1] + combinedArray[middle]) / 2;
  } else {
    return combinedArray[middle];
  }
};

console.log(median(arr1, arr2));
//f
const numbers = [1, 2, 3, 2, 4, 3, 5];
const uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (uniqueNumbers.indexOf(numbers[i]) === -1) {
    uniqueNumbers.push(numbers[i]);
  }
}

console.log(uniqueNumbers);


