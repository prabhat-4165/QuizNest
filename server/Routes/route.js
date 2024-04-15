const express = require('express');
const { addUser, getUser } = require('../Controllers/userController.js');
const { addAdmin, getAdmin } = require('../Controllers/adminController.js');

const router = express.Router();
router.get('/', (req, res) => {
    res.send("Hello from route");
});

router.post('/register-user', addUser);
router.post('/register-admin', addAdmin);
router.post('/login-user', getUser);
router.post('/login-admin', getAdmin);

module.exports = router;
