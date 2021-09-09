// Import Model
const Classe = require('../models').Classe;


/**
 * 
 * List all classes
 */
exports.list_classe = (req, res, next) => {
    Classe.findAll({})
        .then(classes => res.status(200).json(classes))
        .catch(err => console.log(err))
}

/**
 * Add a classe
 */
exports.add_classe = (req, res, next) => {
        const classe = req.body;
        Classe.create(classe)
            .then(classeCreated => res.status(201).json(classeCreated))
            .catch(err => console.log(err))
    }
    /**
     * 
     * Detail classe
     */
exports.detail_classe = (req, res, next) => {
    const id = req.params.id;
    Classe.findByPk(id)
        .then(classe => res.status(200).json(classe))
        .catch(err => console.log(err))
}

/**
 * Edit a classe
 */
exports.edit_classe = (req, res, next) => {
    const id = req.params.id;
    const classe = req.body;
    Classe.update(classe, {
            where: {
                id: id
            }
        })
        .then(classeEdited => res.status(201).json(classeEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a classe
 */
exports.delete_classe = (req, res, next) => {
    const id = req.params.id;
    Classe.destroy({
            where: {
                id: id
            }
        })
        .then(classeDeleted => res.status(200).json({ message: `Classe Deleted ${classeDeleted}` }))
        .catch(err => console.log(err))
}