const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/task-app-api", {
    useNewUrlParser: true,
    useCreateIndex: true
});


// Creating a mongoose Model

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});


const me = new User ({
    name: 'Emmanuel',
    age: 27
})

me.save().then((me) => {
    console.log(me)
}).catch((error)=> {
    console.log('Error', error)
})


// Example of how to create a mongoose model

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed : {
        type: Boolean
    }
})


const task = new Task ({
    description: "Learn the Mongoose library",
    completed: false
})

task.save().then(() => {
    console.log(task);
}).catch(() => {
    console.log(error);
})
