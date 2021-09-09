const Gift = require("../models").Gift;
const Human = require("../models").Human;

/**
 *
 * List all gifts
 *
 */

exports.list_gift = (req, res, next) => {
    Gift.findAll({
            attributes: ["id", "name", "price", "stock"],
            include: [{
                model: Human,
                attributes: ["id", "name", "age", "email"],
            }, ],
        })
        .then((gifts) => res.status(200).json(gifts))
        .catch((err) => console.log(err));
};

/**
 *
 * Detail gift
 *
 */

exports.detail_gift = (req, res, next) => {
    const id = req.params.id;
    Gift.findByPk(id)
        .then((gift) => res.status(200).json(gift))
        .catch((err) => console.log(err));
};

/**
 *
 * Add a gift
 *
 */

exports.add_gift = (req, res, next) => {
    const gift = req.body;
    Gift.create(gift)
        .then((giftCreated) => res.status(201).json(giftCreated))
        .catch((err) => console.log(err));
};

/**
 *
 * Edit a gift
 *
 */

exports.edit_gift = (req, res, next) => {
    const id = req.params.id;
    const gift = req.body;
    Gift.update(gift, {
            where: {
                id: id,
            },
        })
        .then((giftEdited) => res.status(201).json(giftEdited))
        .catch((err) => console.log(err));
};

/**
 *
 * Delete a gift
 *
 */

exports.delete_gift = (req, res, next) => {
    const id = req.params.id;
    Gift.destroy({
            where: {
                id: id,
            },
        })
        .then((giftDeleted) => res.status(200).json({ message: "Gift deleted" }))
        .catch((err) => console.log(err));
};