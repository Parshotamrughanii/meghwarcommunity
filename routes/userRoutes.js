const express = require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../controller/userController');
const router = express.Router();


router.route('/user').get(getUser).post(createUser)
router.route('/user/:id').put(updateUser).delete(deleteUser)


module.exports = router;