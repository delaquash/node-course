const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Task = require('./task')

// Creating a mongoose Model

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        length: 6,
        validate(value) {
            if(value.toLowercase().includes("password")) {
                throw new Error("Password must not be more than six characters")
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique:true,
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
    },
    tokens: [{
        token: {
            type: String,
            required: true

        }

    }]
}, {
    timestamps: true
})

userSchema.virtual('task', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})
// To hide private data
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
}
// Generating jwt for Auth
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'Thisismynewcourse' );

    user.token = user.tokens.concat({  token });
    await user.save()
    return token
}

// Logging in for Users with wrong email or password
userSchema.statics.findByCredentials = async(email, password) => {
    const user = await User.findOne({ email })
    // Error message for user if the user does not exist
    if(!user) {
        throw new Error ('Unable to login');
    }

    // Verifying password for the user
    const isMatch = await bcrypt.compare(password, user.password)

    // Error message if the password isnt the right one
    if(!isMatch) {
        throw new Error ('Unale to login')
    }

    return user
}


// This is too hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this
  if(user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
    //  8 stands for the number of times the pasword should be asked
  }


    next();
})

// Delete user tasks when user is removed
userSchema.pre('remove', async function (next) {
    const user = this;
    await Task.deleteMany({ owner: user._id })

    next()
})

const User = mongoose.model('User',userSchema);

module.exports = User;
