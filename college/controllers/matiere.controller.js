// Import Model
const Matiere = require('../models').Matiere;


/**
 * 
 * List all matieres
 */
exports.list_matiere = (req, res, next) => {
    Matiere.findAll({})
        .then(matieres => res.status(200).json(matieres))
        .catch(err => console.log(err))
}

/**
 * Add a matiere
 */
exports.add_matiere = (req, res, next) => {
        const matiere = req.body;
        Matiere.create(matiere)
            .then(matiereCreated => res.status(201).json(matiereCreated))
            .catch(err => console.log(err))
    }
    /**
     * 
     * Detail matiere
     */
exports.detail_matiere = (req, res, next) => {
    const id = req.params.id;
    Matiere.findByPk(id)
        .then(matiere => res.status(200).json(matiere))
        .catch(err => console.log(err))
}

/**
 * Edit a matiere
 */
exports.edit_matiere = (req, res, next) => {
    const id = req.params.id;
    const matiere = req.body;
    Matiere.update(matiere, {
            where: {
                id: id
            }
        })
        .then(matiereEdited => res.status(201).json(matiereEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a matiere
 */
exports.delete_matiere = (req, res, next) => {
    const id = req.params.id;
    Matiere.destroy({
            where: {
                id: id
            }
        })
        .then(matiereDeleted => res.status(200).json({ message: `Matiere Deleted ${matiereDeleted}` }))
        .catch(err => console.log(err))
}