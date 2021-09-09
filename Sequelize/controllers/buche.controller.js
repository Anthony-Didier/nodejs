const Buche = require("../models").Buche;

/**
 *
 * List all buches
 *
 */

exports.list_buche = (req, res, next) => {
    Buche.findAll()
        .then((buches) => res.status(200).json(buches))
        .catch((err) => console.log(err));
};

/**
 *
 * Detail buche
 *
 */

exports.detail_buche = (req, res, next) => {
    const id = req.params.id;
    Buche.findByPk(id)
        .then((buche) => res.status(200).json(buche))
        .catch((err) => console.log(err));
};

/**
 *
 * Add a buche
 *
 */

exports.add_buche = (req, res, next) => {
    const buche = req.body;
    Buche.create(buche)
        .then((bucheCreated) => res.status(201).json(bucheCreated))
        .catch((err) => console.log(err));
};

/**
 *
 * Edit a buche
 *
 */

exports.edit_buche = (req, res, next) => {
    const id = req.params.id;
    const buche = req.body;
    Buche.update(buche, {
            where: {
                id: id,
            },
        })
        .then((bucheEdited) => res.status(201).json(bucheEdited))
        .catch((err) => console.log(err));
};

/**
 *
 * Delete a buche
 *
 */

exports.delete_buche = (req, res, next) => {
    const id = req.params.id;
    Buche.destroy({
            where: {
                id: id,
            },
        })
        .then((bucheDeleted) => res.status(200).json({ message: "Buche deleted" }))
        .catch((err) => console.log(err));
};