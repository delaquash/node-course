const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect("mongodb://127.0.0.1:27017/task-app-api", {
    useNewUrlParser: true,
    useCreateIndex: true
});


// Creating a mongoose Model

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        length: 6,
        validate(value) {
            if(value.toLowercase().includes("password")) {
                throw new Error("Password must not be more six characters")
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase:true,
        // Using validator npm to validate an email whether it is real or not
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("This must be a valid email")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    }
});


const me = new User ({
    name: 'Emmanuel',
    age: 27,
    // Throws an error becoause they email code below is invalid
    email:'mike@'
});

me.save().then((me) => {
    console.log(me)
}).catch((error)=> {
    console.log('Error', error);
});


// Example of how to create a mongoose model

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})


const task = new Task ({
    description: 'My goal is to become a competent software developer'
})

task.save().then(() => {
    console.log(task);
}).catch(() => {
    console.log(error);
})
