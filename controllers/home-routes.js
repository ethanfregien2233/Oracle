const router = require('require').Router();


router.get('/', (req, res) => {
    res.render('index')
});

module.exports = router;