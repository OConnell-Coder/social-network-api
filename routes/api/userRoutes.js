const router = require('express').Router();
const {getUsers, createUser, getOneUser} = require('../../controllers/userController');

router.route('/')
    .post(createUser)

    .get(getUsers);

router.route('/:userId').get(getOneUser);

module.exports = router;
