const Notes = require('../models/NotesModel')

// Create a Note
exports.createNotes = (req, res) => {
    Notes.create(req.body)
        .then(note => res.status(201).json({ success: true, note }))
        .catch(err => res.status(500).json(err.message))
}

// Get all Notes
exports.getAllNotes = (req, res) => {
    Notes.find()
        .then(notes => res.status(200).json({ success: true, notes }))
        .catch(err => res.status(500).json(err.message))
}

// Update a Note
exports.updateNotes = async (req, res) => {

    try {
        const note = await Notes.findById(req.params.id)

        if (!note) {
            return res.status(404).json({ success: false, message: "Note Not Found" })
        }

        Notes.findByIdAndUpdate(req.params.id, req.body)
            .then(note => res.status(200).json({ success: true, note }))
            .catch(err => res.status(500).json(err.message))

    } catch (error) {
        res.status(500).json(error.message)
    }

}

// Delete a User
exports.deleteNotes = async (req, res) => {

    try {
        const note = await Notes.findById(req.params.id)

        if (!note) {
            return res.status(404).json({ success: false, message: "Note Not Found" })
        }

        Notes.findByIdAndDelete(req.params.id)
            .then(note => res.status(200).json({ success: true, note }))
            .catch(err => res.status(500).json(err.message))

    } catch (error) {
        res.status(500).json(error.message)
    }


}

// Get a Individual User
exports.getOneNote = async (req, res) => {

    try {
        const note = await Notes.findById(req.params.id)

        if (!note) {
            return res.status(404).json({ success: false, message: "Note Not Found" })
        }
        Notes.findById(req.params.id)
            .then(note => res.status(200).json({ success: true, note }))
            .catch(err => res.status(500).json(err.message))
    } catch (error) {
        res.status(500).json(error.message)
    }


} 
