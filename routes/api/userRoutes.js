const router = require('express').Router();
const {getUsers, createUser, getOneUser, updateUser} = require('../../controllers/userController');

router.route('/')
    .post(createUser)

    .get(getUsers)
;

router.route('/:userId')
    .get(getOneUser)

    .put(updateUser)
;

module.exports = router;
