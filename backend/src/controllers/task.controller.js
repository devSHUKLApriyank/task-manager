function createTask(req, res){
    const {title , priority} = req.body;

    const task = {
        title,
        priority
    };

    res.status(201).json({
        success:true,
        message: "Task created successfully",
        task:task
    })
}

module.exports = { createTask };