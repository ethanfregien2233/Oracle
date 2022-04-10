const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('index')
});

router.get('/', (req, res) => {
    res.sendFile(_dirname + '/views/exposure.ejs')
    res.render('exposure')
});

module.exports = router;