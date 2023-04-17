const myObj = {
    "name": "Sabu",
    "age": 25,
    "city": "Trichy"
  };
 
  for(let i = 0; i < Object.keys(myObj).length; i++) {
    const key = Object.keys(myObj)[i];
    const value = myObj[key];
    console.log(key + ": " + value);
  }

  for(let key in myObj) {
    if(myObj.hasOwnProperty(key)) {
      console.log(key + ": " + myObj[key]);
    }
  }
 
  for(let [key, value] of Object.entries(myObj)) {
    console.log(key + ": " + value);
  }

  Object.entries(myObj).forEach(([key, value]) => {
    console.log(key + ": " + value);
  });
  