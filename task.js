 //var user = { name: "person", age: 5 };
 //var user1 = { age: 5, name: "person" };

 //console.log(user[0]);

var arr = [{name: "Manikandan", age:32},{name:"John", age:22}];
console.log("Sample: " + arr[0].name + " " + arr[0].age);


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function () { 
  var responseObj = xhr.response;
  for(var i = 0; i < responseObj.length; i++) {
    console.log(responseObj[i].flag)
  }
}
{
  const asianCountries = data.filter(
    (country) => country.region === "Asia"
  );
  console.log("Asian countries:", asianCountries);

}