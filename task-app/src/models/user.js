const mongoose = require('mongoose');
const validator = require('validator');

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


module.exports = User;
