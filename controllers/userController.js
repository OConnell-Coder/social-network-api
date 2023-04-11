const { ObjectId } = require('mongoose').Types;
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
    },

    deleteUser(req, res){
        User.findOneAndDelete({_id: req.params.userId})
        .then((user) =>
         !user
            ? res.status(404).json({ message: 'No user found with that ID.' })
            : res.status(200).json({ message: `User #${req.params.userId} was deleted.`})
        )
        .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res){
        User.findOneAndUpdate(
            { _id: ObjectId(req.params.userId) },
            { $addToSet: {friends: ObjectId(req.params.friendId)} },
            { new: true }
        )
        .then((user) =>
        !user
           ? res.status(404).json({ message: 'No user found with that ID.' })
           : res.status(200).json({ message: `User #${req.params.friendId} was added as a friend.`})
       )
       .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res){
        User.findOneAndUpdate(
            { _id: ObjectId(req.params.userId) },
            { $pull: {friends: ObjectId(req.params.friendId)} },
            { new: true }
        )
        .then((user) =>
        !user
           ? res.status(404).json({ message: 'No user found with that ID.' })
           : res.status(200).json({ message: `User #${req.params.friendId} was removed as a friend.`})
       )
       .catch((err) => res.status(500).json(err));
    }
};

module.exports = userController;