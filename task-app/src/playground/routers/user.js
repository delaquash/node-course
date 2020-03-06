const express = require('express');
const user = require ('../models/user')
const router = new express.Router();


router.post('/users', async (req, res) => {
    // console.log(req.body);
    // res.send('testing');
//     const user = new User(req.body);

//     user.save().then(() => {
//         res.status(200).send(user);
//     }).catch(() => {
//         res.status(400).send(e)
//     })


router.post('/task', async (req,res) => {
    // const task = new Task(req.body);
    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch(() => {
    //     res.status(400).send(e)
    // })

    // Refactoring Task route to use async await

    try {
        const task = await Task.find({})
        res.status(201).send(tasks)
    } catch(e){
          res.status(400).send(e)
    }
});


// How to use async await to refactor the app.post section above
const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)
    }

})

// How to successfully log in users using an endpoint which users can use by creating a reusable function
router.post('/users/login', async(req, res) => {
    try () {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const tken = await user.generateAuthToken()
        res.send(e)
    } catch(e) {
        res.status(400).user()
    }
})



router.get('/users', async (req, res, next) => {
//     How to find user using the get method
//     user.find({}).then((users) => {
//         res.send(users)
//     }).catch((e) => {
//         res.status(500).send();
//     })
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
    next()
})


// Trying oyut the async await metgod on the patch route

router.patch("/users/:id" , async (req, res, next) => {
    // When adding a new or updating a property
    const updates = object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidationOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidationOperation) {
        return res.status(400).send({ error: 'Invalid updates'})
    }

    try {
        // const user = await User.findByIdAndUpdate(req.params.id, req.body ({ new:true, runValidators: true }))

        const user = await User.findById(req.params.id)
        updates.forEach((update) => user[update] = req.body[update]);

        await user.save();

        if (!user) {
            return res.status(404).send()
        }
    } catch (e) {
        res.status(400).send(e);
    }
    next()
});

// THIS IS THE DELETE METHOD IN CRUD OPERATION


// Deleting a particular user the patch and \async await method
router.delete("/users/:id", async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
    next()
})

// Deleting a particular task using the patch and async await method
router.delete("/task/:id", async (req, res, next) => {
    try {
        // const task = await Task.findByIdAndDelete(req.params.id)
        const task = await Task.findById(req.params.id)
        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();


        if(!task) {
            return res.status(400).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
    next()
})

app.listen(port, () => {
    console.log("Server is up on " + port);
})







module.exports = router;
