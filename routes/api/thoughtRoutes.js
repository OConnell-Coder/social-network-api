const router = require('express').Router();
const {createThought, getThoughts, getOneThought, updateThought, deleteThought} = require('../../controllers/thoughtController');

router.route('/')
    .post(createThought)

    .get(getThoughts)
;

router.route('/:thoughtId')
    .get(getOneThought)

    .put(updateThought)

    .delete(deleteThought)
;

module.exports = router;