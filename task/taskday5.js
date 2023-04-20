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
//g
const arr = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
//h
const arr = [1, 2, 3, 4, 5];
const k = 2;

for (let i = 0; i < k; i++) {
  const removed = arr.pop();
  arr.unshift(removed);
}

console.log(arr);
//2
//a
const number = prompt("enter the number");
const result = (number % 2 ==0)? "even " "odd";
console.log('the number is ${result}');
//b
function titleCase(str) {
  str = str.toLowerCase().split('');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].chartAt(0).toupperCase() + str[i].splice(1);
  }
  return str.jion(' ');
}
console.log(titleCase("guvi geek"));
//c
var arr = [1,2,3,4,5,6]
var sum = 0:
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  console.log("sum is " + sum);
}
//d

var a = [1,2,3,4,5,6]
var prime = [];

function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);
//e
function isPalindrome(s)
{

    let a = s;
    s = s.split('').reverse().join('');
 
    return s == a;
}
function PalindromicStrings(arr,N)
{
    let ans = [];
 
    for (let i = 0; i < N; i++) {

        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
let s = PalindromicStrings(arr, N);
if(s.length == 0)
    document.write("-1");
for(let st of s)
    document.write(st," ");
 





