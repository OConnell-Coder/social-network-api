const router = require('express').Router();
const {createThought, getThoughts, getOneThought, updateThought, deleteThought, addReaction, removeReaction} = require('../../controllers/thoughtController');


router.route('/')
    .post(createThought)

    .get(getThoughts)
;


router.route('/:thoughtId')
    .get(getOneThought)

    .put(updateThought)

    .delete(deleteThought)
;


router.route('/:thoughtId/reactions')

    .post(addReaction)
;


router.route('/:thoughtId/reactions/:reactionId')

    .delete(removeReaction)
;


module.exports = router;