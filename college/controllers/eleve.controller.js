// Import Model
const Eleve = require('../models').Eleve;


/**
 * 
 * List all eleves
 */
exports.list_eleve = (req, res, next) => {
    Eleve.findAll({})
        .then(eleves => res.status(200).json(eleves))
        .catch(err => console.log(err))
}

/**
 * Add a eleve
 */
exports.add_eleve = (req, res, next) => {
        const eleve = req.body;
        Eleve.create(eleve)
            .then(eleveCreated => res.status(201).json(eleveCreated))
            .catch(err => console.log(err))
    }
    /**
     * 
     * Detail eleve
     */
exports.detail_eleve = (req, res, next) => {
    const id = req.params.id;
    Eleve.findByPk(id)
        .then(eleve => res.status(200).json(eleve))
        .catch(err => console.log(err))
}

/**
 * Edit a eleve
 */
exports.edit_eleve = (req, res, next) => {
    const id = req.params.id;
    const eleve = req.body;
    Eleve.update(eleve, {
            where: {
                id: id
            }
        })
        .then(eleveEdited => res.status(201).json(eleveEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a eleve
 */
exports.delete_eleve = (req, res, next) => {
    const id = req.params.id;
    Eleve.destroy({
            where: {
                id: id
            }
        })
        .then(eleveDeleted => res.status(200).json({ message: `Eleve Deleted ${eleveDeleted}` }))
        .catch(err => console.log(err))
}