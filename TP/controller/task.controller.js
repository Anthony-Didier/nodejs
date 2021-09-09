const tasks = [{
        id: 1,
        name: "Etre en cours",
        completed: true
    },
    {
        id: 2,
        name: "Comprendre le cours",
        completed: false
    }
];

/**
 * 
 * List tasks
 * 
 */

exports.list_task = (req, res, next) => {
    res.status(200).json(tasks);
}

/**
 * 
 * Detail task
 * 
 */

exports.detail_task = (req, res, next) => {
    // Get the route parameter
    const id = req.params.id; // id is the key in router
    const task = tasks.filter(taskDetail => taskDetail.id == id)
    res.status(200).json(task[0])
}

/**
 * 
 * Add task
 * 
 */

exports.add_task = (req, res, next) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
}

/**
 * 
 * Edit task
 * 
 */

exports.edit_task = (req, res, next) => {
    const task = req.body;
    const id = req.params.id;
    const index = tasks.findIndex(detailTask => detailTask.id == id);
    tasks[index] = task;
    res.status(200).json(task);
}

/**
 * 
 * Status task
 * Change the statuts of the task
 * 
 */

exports.status_task = (req, res, next) => {
    const status = req.body.status;
    const id = req.params.id;
    const index = tasks.findIndex(taskDetail => taskDetail.id == id);
    tasks[index].status = status;
    res.status(200).json(task[index]);
}

/**
 * 
 * Delete task
 * 
 */

exports.delete_task = (req, res, next) => {
    const id = req.params.id;
    const index = tasks.findIndex(taskDetail => taskDetail.id == id);
    tasks.slice(index, 1);
    // tasks = tasks.filter(task => task.id != id);
    res.status(200).json({ message: "Task deleted" });
};