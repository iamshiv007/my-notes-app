const User = require('../models/UserModel')


// Create a User
exports.createUser = (req, res) => {
     User.create(req.body)
    .then(user => res.status(201).json({success: true, user}))
    .catch(err => res.status(500).json(err.message))
} 

// Get all Users
exports.getAllUser = (req, res) => {
    User.find()
    .then(users => res.status(200).json({success:true, users}))
    .catch(err => res.status(500).json(err.message))
}

// Update a User
exports.updateUser = async (req, res) => {
 
    try {
        const user = await User.findById(req.params.id)

    if(!user){
        return res.status(404).json({success:false, message:"User Not Found"})
    }
    
     User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.status(201).json({success: true, user}))
    .catch(err => res.status(500).json(err.message))

    } catch (error) {
        res.status(500).json(error.message)
    }
    
    
} 

// Delete a User
exports.deleteUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id)

    if(!user){
        return res.status(404).json({success:false, message:"User Not Found"})
    }
    
      User.findByIdAndDelete(req.params.id)
      .then(user => res.status(201).json({success: true, user}))
      .catch(err => res.status(500).json(err.message))

    } catch (error) {
        res.status(500).json(error.message)
    }
    

    
} 

// Get a Individual User
exports.getOneUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id)

    if(!user){
        return res.status(404).json({success:false, message:"User Not Found"})
    }
    
      User.findById(req.params.id)
      .then(user => res.status(201).json({success: true, user}))
      .catch(err => res.status(500).json(err.message))
    } catch (error) {
        res.status(500).send(error.message)
    }
    
    
} 
