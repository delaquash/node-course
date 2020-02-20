const mongoose = require('mongoose');
// const validator = require('validator'); Not used again

mongoose.connect("mongodb://127.0.0.1:27017/task-app-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// const me = new User ({
//     name: 'Emmanuel',
//     age: 27,
//     // Throws an error becoause they email code below is invalid
//     email:'mike@'
// });

// me.save().then((me) => {
//     console.log(me)
// }).catch((error)=> {
//     console.log('Error', error);
// });


// Example of how to create a mongoose model

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// });


// const task = new Task ({
//     description: 'My goal is to become a competent software developer'
// })

// task.save().then(() => {
//     console.log(task);
// }).catch(() => {
//     console.log(error);
// })
