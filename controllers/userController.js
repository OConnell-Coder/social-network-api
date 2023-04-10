const {User} = require('../models');

const userController = {
    createUser(req, res){
        console.log(req.body);

        User.create(req.body)
            .then((userData) => res.json(userData));
    },

    getUsers(req, res){
        User.find().then((data) => res.json(data));
    },

    getOneUser(req, res){
        User.findOne({_id: req.params.userId})
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID.' })
          : res.json(user)
        )
      .catch((err) => res.status(500).json(err));
    },

    updateUser(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: {email: req.body.email} },
            { new: true }
        )
        .then((user) =>
            !user
             ? res.status(404).json({ message: 'No user found with that ID.' })
             : res.json(user)
            )
        .catch((err) => res.status(500).json(err));
    }
};

module.exports = userController;