const users = [{
        id: 1,
        name: "Greg"
    },
    {
        id: 2,
        name: "Elsa"
    },
    {
        id: 4,
        name: "Julien"
    }
];

exports.list_user = (req, res, next) => {
    res.status(200).json({ users: users })
}

exports.detail_user = (req, res, next) => {
    // Get the route parameter
    const id = req.params.id; // id is the key in router
    const user = users.filter(userDetail => userDetail.id == id)
    res.status(200).json(user[0])
}

exports.add_user = (req, res, next) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: "User added" });
}