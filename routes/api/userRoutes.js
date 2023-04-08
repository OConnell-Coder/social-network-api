const router = require('express').Router();
const {getUsers, createUser} = require('../../controllers/userController');

router.route('/')
    .post(createUser)

    .get(getUsers);

module.exports = router;
