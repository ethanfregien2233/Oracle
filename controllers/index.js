const router = require('express').Router();
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

//catch other requests
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;