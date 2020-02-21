require('./src/db/mongoose');
const User = require('../src/models/task');

User.findByIdAndUpdate('', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
}). then((result) => {
    console.log(result);
}).catch((e) =>{
    console.log(e);
});
