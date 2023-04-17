// Example JSON object
const myObj = {
    "name": "sabu",
    "age": 25,
    "city": "New Trichy"
  };
  
  // For loop
  for(let i = 0; i < Object.keys(myObj).length; i++) {
    const key = Object.keys(myObj)[i];
    const value = myObj[key];
    console.log(key + ": " + value);
  }
  
  // For-in loop
  for(let key in myObj) {
    if(myObj.hasOwnProperty(key)) {
      console.log(key + ": " + myObj[key]);
    }
  }
  
  // For-of loop
  for(let [key, value] of Object.entries(myObj)) {
    console.log(key + ": " + value);
  }
  
  // For-each loop
  Object.entries(myObj).forEach(([key, value]) => {
    console.log(key + ": " + value);
  });
  