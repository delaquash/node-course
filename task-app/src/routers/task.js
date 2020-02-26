const express = require('express');
const user = require ('../models/task');
const router = new express.Router();


router.post('/task', async (req, res, next) => {
    const task = new Task (req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
     next()
});

router.get('/task', async (req, res, next) => {
    try {
        const tasks = await Task.find({})
        res.send(task)

    } catch (e) {
        res.status(500).send()
    }
    next()
})

module.exports = router;
