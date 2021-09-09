const Note = require('../models').Note;

async function average() {
    try {
        const notes = await Note.findAll({
            attributes: ['note']
        })
        let notesArray = [];
        notes.map(note => notesArray.push(note.note));
        // Average
        const averageNote = notesArray.reduce((a, b) => (a + b) / notesArray.length)
        return averageNote;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { average };