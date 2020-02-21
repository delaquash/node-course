const add = (a, b) =>  {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // Calling the reject call when a negative number is inputted
                if (a < 0 || b < 0) {
                    return reject ("Number must not be negative")
                }
            resolve(a + b);
        }, 2000);
    });
};


const doWork = async () => {
    const sum = await add(1, 19);
    const sum2 = await add(sum, 29);
    const sum3 = await add(sum2, -39);
    return sum3
};

doWork().then((result) => {
    console.log('result', result);
}).catch((e) => {
    console.log('e', e);
});
