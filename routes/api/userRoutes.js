const router = require('express').Router();
const {getUsers, createUser, getOneUser, updateUser, deleteUser} = require('../../controllers/userController');

router.route('/')
    .post(createUser)

    .get(getUsers)
;

router.route('/:userId')
    .get(getOneUser)

    .put(updateUser)

    .delete(deleteUser)
;

module.exports = router;
