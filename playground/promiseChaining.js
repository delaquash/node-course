const add = (a, b) =>  {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}
// Rather than adding several .then together to make it look complex and more coding,

// add(1, 2).then((sum) => {
//     console.log(sum);

//     add(3, 7).then((sum) => {
//         console.log(sum);
//     })
// }).catch((e) => {
//     console.log(e);
// }).catch((e) => {
//     console.log(e);
// })



// We can use the Promise chaining method as used


add(1, 2).then((sum) =>{
    console.log(sum);
    return add(sum, 6);
}).then((sum2) => {
    console.log('here is ', sum2);
    // console.log(typeof C)
}).catch((e) => {
    console.log(e)
});
