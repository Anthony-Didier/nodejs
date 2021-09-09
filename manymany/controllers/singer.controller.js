// Import Model
const Singer = require('../models').Singer;
const Style = require('../models').Style;
const SingerStyle = require('../models').SingerStyle;


/**
 * 
 * List all singers
 */
exports.list_singer = (req, res, next) => {
    Singer.findAll({
            attributes: ['id', 'name'],
            include: [{
                model: Style,
                attributes: ['id', 'name'],
                through: {
                    model: SingerStyle,
                    attributes: []
                }
            }]
        })
        .then(singers => res.status(200).json(singers))
        .catch(err => console.log(err))
}

/**
 * Add a singer
 */
exports.add_singer = (req, res, next) => {
        const singer = req.body;
        Singer.create(singer)
            .then(singerCreated => {
                if (singer.Styles != undefined && singer.Styles.length > 0) {
                    singerCreated.setStyles(singer.Styles)
                        .then(() => res.status(201).json(singerCreated))
                        .catch(err => console.log(err))
                } else {
                    res.status(201).json(singerCreated)
                }
            })
            .catch(err => console.log(err))
    }
    /**
     * 
     * Detail singer
     */
exports.detail_singer = (req, res, next) => {
    const id = req.params.id;
    Singer.findByPk(id)
        .then(singer => res.status(200).json(singer))
        .catch(err => console.log(err))
}

/**
 * Edit a singer
 */
exports.edit_singer = (req, res, next) => {
    const id = req.params.id;
    const singer = req.body;
    Singer.update(singer, {
            where: {
                id: id
            }
        })
        .then(singerEdited => res.status(201).json(singerEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a singer
 */
exports.delete_singer = (req, res, next) => {
    const id = req.params.id;
    Singer.destroy({
            where: {
                id: id
            }
        })
        .then(singerDeleted => res.status(200).json({ message: `Singer Deleted ${singerDeleted}` }))
        .catch(err => console.log(err))
}