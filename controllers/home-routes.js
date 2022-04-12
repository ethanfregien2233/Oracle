const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('index')
});

//changed route from '/' to '/exposure'
router.get('/exposure', (req, res) => {
    // res.sendFile(_dirname + '/views/exposure.ejs') //this doesn't do anything lol
    res.render('exposure') //just need this, calling render tells ejs to look in views automatically
});

module.exports = router;