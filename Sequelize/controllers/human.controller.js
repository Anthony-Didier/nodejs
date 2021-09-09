const Human = require("../models").Human;
const Gift = require("../models").Gift;


/**
 *
 * List all humans
 *
 */

exports.list_human = (req, res, next) => {
    Human.findAll({
            attributes: ["id", "name", "age", "email"],
            include: [{
                model: Gift,
                attributes: ["id", "name", "price", "stock"]
            }]
        })
        .then((humans) => res.status(200).json(humans))
        .catch((err) => console.log(err));
};

/**
 *
 * Detail human
 *
 */

exports.detail_human = (req, res, next) => {
    const id = req.params.id;
    Human.findByPk(id)
        .then((human) => res.status(200).json(human))
        .catch((err) => console.log(err));
};

/**
 *
 * Add a human
 *
 */

exports.add_human = (req, res, next) => {
    const human = req.body;
    Human.create(human)
        .then((humanCreated) => res.status(201).json(humanCreated))
        .catch((err) => console.log(err));
};

/**
 *
 * Edit a human
 *
 */

exports.edit_human = (req, res, next) => {
    const id = req.params.id;
    const human = req.body;
    Human.update(human, {
            where: {
                id: id,
            },
        })
        .then((humanEdited) => res.status(201).json(humanEdited))
        .catch((err) => console.log(err));
};

/**
 *
 * Delete a human
 *
 */

exports.delete_human = (req, res, next) => {
    const id = req.params.id;
    Human.destroy({
            where: {
                id: id,
            },
        })
        .then((humanDeleted) => res.status(200).json({ message: "Human deleted" }))
        .catch((err) => console.log(err));
};