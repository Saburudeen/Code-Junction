let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting new API!!!!");
    setTimeout(() => {
        resolve("Api value return");
    }, 2000);
})

console.log(promiseObj);