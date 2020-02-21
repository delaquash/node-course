require('./src/db/mongoose');
const User = require('../src/models/task.js');


Task.findByIdAndDelete('').then((Task) => {
    console.log(Task);
    return Task.countTask({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
