const router = require('express').Router();
// Import all API routes 
const apiRoutes = require('./api');
// Add API routes imported from the `api` directory
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;