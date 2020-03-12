const express = require('express');
const user = require ('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();


router.post('/task', auth,  async (req, res) => {
    const task = new Task ({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
     next()
});

router.get('/task', auth,  async (req, res) => {
    try {
        // const tasks = await Task.find({})
        await req.user.populate('task').execPopulate()
        res.send(req.user.tasks)

    } catch (e) {
        res.status(500).send()
    }
    next()
})


// Trying oyut the async await metgod on the patch route

router.patch("/task/:id", auth , async (req, res, next) => {
    // When adding a new or updating a property
    const updates = object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidationOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidationOperation) {
        return res.status(400).send({ error: 'Invalid updates'})
    }

    try {
        // const user = await User.findByIdAndUpdate(req.params.id, req.body ({ new:true, runValidators: true }))
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })


        await user.save();

        if (!user) {
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update]);
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e);
    }
    next()
});

router.get('/task',auth,  async (req, res) => {
    const match = {}
    const sort = {}

    if(req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    if(req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[part[0]] = parts[1] === 'desc' ? -1 : 1 
    }
    try {
        // const tasks = await Task.find({ owner: req.user._id})
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.tasks)

    } catch (e) {
        res.status(500).send()
    }
    next()
})

router.get('/task/:id', async (req, res) => {
    const _id = req.params.id
    try {
        // const _id = await Task.findById({_id})
        const task = await Task.findOne({ _id, owner: req.user._id })
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)

    } catch (e) {
        res.status(500).send()
    }
    next()
})

// Delete user ask when user is removed




module.exports = router;
