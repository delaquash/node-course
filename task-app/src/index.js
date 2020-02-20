const express = require("express");
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');


const app = express()
const port = process.env.PORT || 3000;


app.use(express.json())

app.post('/users', (req, res) => {
    // console.log(req.body);
    // res.send('testing');
    const user = new User(req.body);

    user.save().then(() => {
        res.status(200).send(user);
    }).catch(() => {
        res.status(400).send(e)
    })
})

// After creating task.js and importing it, this is how to call the endpoint


app.post('/task', (req,res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.status(201).send(task)
    }).catch(() => {
        res.status(400).send(e)
    })
})


//How to find user using the get method

app.get('/users', (req, res) => {
    const user = new User(req.body);
    user.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send();
    })
})

// how to fin a user by ID using the get method

app.get('./users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById().then((user) => {
        if (!user) {
                    return res.status(404).send()
                }
            res.send(user)
    }).catch((e) => {
        res.status(500).send();
    })
})



app.listen(port, () => {
    console.log("Server is up on " + port);
})
