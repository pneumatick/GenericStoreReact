const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const path = require('path');
const { queryUser } = require('./helpers');

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    
    try {
        const user = await queryUser(username);
        if (!user) { return res.status(403).json({ msg: `User ${username} not found` }) }

        const passMatched = await bcrypt.compare(password, user.password);
        if (passMatched) {
            req.session.authenticated = true;
            //req.session.user = { username: username, password: password };
            req.session.user = {username: username, permission: user.permission}
            console.log(req.session); // just for testing, obviously insecure
            //res.redirect('store');
            res.status(200).json();
        }
        else {
            res.status(403).json({ msg: 'Bad credentials' });
        }
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;