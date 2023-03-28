const router = require("express").Router();
const Task = require("../models/task");

router.delete('/', async (req, res) => {
    const taskId = req.body.id
    const result = await Task.deleteOne({_id: taskId})
    console.log(result)
    res.send(JSON.stringify(result))
})

module.exports = router