const router = require('express').Router();
const {getUsers, createUser, getOneUser, updateUser, deleteUser, addFriend, removeFriend} = require('../../controllers/userController');


router.route('/')
    .post(createUser)

    .get(getUsers)
;


router.route('/:userId')
    .get(getOneUser)

    .put(updateUser)

    .delete(deleteUser)
;


router.route('/:userId/friends/:friendId')
    .post(addFriend)

    .delete(removeFriend)
;


module.exports = router;
