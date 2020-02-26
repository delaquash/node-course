require('./src/db/mongoose');
const User = require('../src/models/task.js');


// Task.findByIdAndDelete('').then((Task) => {
//     console.log(Task);
//     return Task.countTask({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (task, id) => {
    const task = await User.findByIdAndDelete(id);
    const count = await User.countDocument({ completed: false });
}

deleteTaskAndCount(("").then((task) => {
    console.log(task);
}).catch((e)=> {
    console.log(e);
})
