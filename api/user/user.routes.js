const express = require('express');
const { login } = require('./user.controller');
const router = express.Router();

router.get('/', login);

module.exports = router;