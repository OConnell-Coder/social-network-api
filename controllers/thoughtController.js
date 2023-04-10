const {Thought, User} = require('../models');

const thoughtController = {
    createThought(req, res){
        Thought.create(req.body)
        .then((thought) => {
          return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
          );
        })
        .then((thought) =>
          !thought
            ? res
                .status(404)
                .json({ message: 'Thought was created, but no user was found with this ID' })
            : res.json({ message: 'Thought created!' })
        )
        .catch((err) => {
          console.error(err);
        });
    },

    getThoughts(req, res){
        Thought.find().then((data) => res.json(data));
    },

    getOneThought(req, res){
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with that ID.' })
          : res.json(thought)
        )
      .catch((err) => res.status(500).json(err));
    },

    updateThought(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: {thoughtText: req.body.thoughtText} },
            { new: true }
        )
        .then((thought) =>
            !thought
             ? res.status(404).json({ message: 'No thought found with that ID.' })
             : res.json(thought)
            )
        .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res){
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((thought) =>
         !thought
            ? res.status(404).json({ message: 'No thought found with that ID.' })
            : res.status(200).json({ message: `Thought #${req.params.thoughtId} was deleted.`})
        )
        .catch((err) => res.status(500).json(err));
    }
};

module.exports = thoughtController;