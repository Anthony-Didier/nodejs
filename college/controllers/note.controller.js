// Import Model
const Note = require('../models').Note;
const Eleve = require('../models').Eleve;
const Matiere = require('../models').Matiere;

const noteService = require('../services/note.service');

const sequelize = require('sequelize')


/**
 * 
 * List all notes
 */
exports.list_note = (req, res, next) => {
    Note.findAll({
            attributes: ['note', 'date', [sequelize.col('Eleve.firstName'), 'firstName'],
                [sequelize.col('Eleve.lastName'), 'lastName'],
                [sequelize.fn('CONCAT', sequelize.literal('Eleve.firstName'), ' ', sequelize.literal('Eleve.lastNAme')), 'fullName'],
                [sequelize.col('Matiere.name'), 'matiere']
            ],
            include: [{
                    model: Eleve,
                    attributes: []
                },
                {
                    model: Matiere,
                    attributes: []
                }
            ]
        })
        .then(notes => res.status(200).json(notes))
        .catch(err => console.log(err))
}

/**
 * Average note
 */
exports.average_note = (req, res, next) => {
    noteService.average()
        .then(data => res.status(200).json({ average: data }))
        .catch(err => console.log(err))
}


/**
 * 
 * Detail note
 */
exports.detail_note = (req, res, next) => {
    const id = req.params.id;
    Note.findByPk(id)
        .then(note => res.status(200).json(note))
        .catch(err => console.log(err))
}

/**
 * Add a note
 */
exports.add_note = (req, res, next) => {
    const note = req.body;
    Note.create(note)
        .then(noteCreated => res.status(201).json(noteCreated))
        .catch(err => console.log(err))
}

/**
 * Edit a note
 */
exports.edit_note = (req, res, next) => {
    const id = req.params.id;
    const note = req.body;
    Note.update(note, {
            where: {
                id: id
            }
        })
        .then(noteEdited => res.status(201).json(noteEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a note
 */
exports.delete_note = (req, res, next) => {
    const id = req.params.id;
    Note.destroy({
            where: {
                id: id
            }
        })
        .then(noteDeleted => res.status(200).json({ message: `Note Deleted ${noteDeleted}` }))
        .catch(err => console.log(err))
}