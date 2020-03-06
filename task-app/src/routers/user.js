const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();


router.get('/test', (req, res) => {
    res.send("From Olaide Emmanuel")
})

const user = require ('../models/user')


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
router.post('./users', async (req, res) => {
    const user = new User(req.body)

    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch(e) {
        res.status(400).send(e)
    }

})
})


// How to successfully log in users using an endpoint which users can use by creating a reusable function
router.post('/users/login', async(req, res) => {
    try  {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const tken = await user.generateAuthToken()
        res.send({ user, token })
    } catch(e) {
        res.status(400).user()
    }
})

router.post('./users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save();
        res.send()
    } catch(e){
        res.status(500).send()
    }
})

// Task----- Create a way to logout of all session, set up the POST/users/logoutAll, create the route handler to wipe the tokens aways
// Send 200 or 500, Test your work
// login few times and logout of all. Check database

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})





router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
//     How to find user using the get method
//     user.find({}).then((users) => {
//         res.send(users)
//     }).catch((e) => {
//         res.status(500).send();
//     })
    // try {
    //     const users = await User.find({})
    //     res.send(users)
    // } catch (e) {
    //     res.status(500).send()
    // }
});


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

// router.listen(port, () => {
//     console.log("Server is up on " + port);
// })


// router.listen(process.env.PORT || 3000);


module.exports = router;

