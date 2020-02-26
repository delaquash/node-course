require('./src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('', { age: 1 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
// }). then((result) => {
//     console.log(result);
// }).catch((e) =>{
//     console.log(e);
// });



const updateAgeAndCount = async (age, id) => {
    // const user = await findByIdAndUpdate(id, { age: age }) But taking advantage of the ES6 shorthand syntax
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
}


updateAgeAndCount('id', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
