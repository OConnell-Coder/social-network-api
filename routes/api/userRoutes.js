const router = require('express').Router();
const {getUsers, createUser} = require('../../controllers');

router.route('/')
    .post(createUser)
    //server crashing, getting an error here:
    //"Route.post() requires a callback function but got a [object Undefined]"
    .get(getUsers);

module.exports = router;
