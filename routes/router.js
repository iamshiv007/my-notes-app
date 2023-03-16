
const router = require('express').Router()

// For User 
const { createUser, getAllUser, updateUser, deleteUser, getOneUser } = require('../controllers/UserController')

router.route('/user').post(createUser).get(getAllUser)
router.route('/user/:id').put(updateUser).delete(deleteUser).get(getOneUser)

// For Notes 
const { createNotes, getAllNotes, updateNotes, deleteNotes, getOneNote } = require('../controllers/NotesController')

router.route('/notes').post(createNotes).get(getAllNotes)
router.route('/notes/:id').put(updateNotes).delete(deleteNotes).get(getOneNote)

module.exports = router