const router = require("express").Router();
const Task = require("../models/task");

router.get("/edit", (req, res) => {
    const taskId = req.query.id;
    res.render("edit/new_task_data", {
        id: taskId,
    });
});

router.post("/edit", async (req, res, next) => {
    const taskId = req.body.id;

    console.log(req.body);

    if (!taskId || !req.body.name || !req.body.status || !req.body.dueDate) {
        console.error("improper format");
        res.status(500).redirect("/wrong-input");
        return next();
    }

    console.log(`taskId passed : ${taskId}`);

    const newTaskData = structuredClone(req.body);
    try {
        let editedTask = await Task.findOne({ _id: taskId });
        editedTask.overwrite({
            name: newTaskData.name,
            status: parseInt(newTaskData.status),
            dueDate: newTaskData.dueDate,
        });
        console.log(editedTask);
        await editedTask.save();
        res.redirect("/update-successful");
    } catch (error) {
        res.status(500).redirect("/wrong-input");
    }
});

router.get('/update-successful', (req, res) => {
    res.render('edit/update_successful')
})

module.exports = router;
