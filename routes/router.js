
const router = require('express').Router()

// For User 
const { createUser, getAllUser, updateUser, deleteUser, getOneUser, logInUser } = require('../controllers/UserController')

router.route('/user').post(createUser)
router.route('/user/:id').put(updateUser).delete(deleteUser).get(getOneUser)
router.route('/user/login').post(logInUser)

// For Notes 
const { createNotes, getAllNotes, updateNotes, deleteNotes, getOneNote } = require('../controllers/NotesController')

router.route('/notes').post(createNotes).get(getAllNotes)
router.route('/notes/:id').put(updateNotes).delete(deleteNotes).get(getOneNote)

module.exports = router