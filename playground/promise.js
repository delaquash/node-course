const doWorkPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        // resolve ([7, 3, 5]);
        reject ([11, 13, 17]);
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success', result);
}).catch((error) => {
    console.log("Error", error);
})
