const doWorkPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve ([7, 3, 5])
    }, 2000)
})
