var express = require('express');
var router = express.Router();
const bookCtrl = require('../controllers/books');

/* GET users listing. */
router.get('/', bookCtrl.index)
router.post('/', bookCtrl.create)
router.get('/:id', bookCtrl.details)
router.delete('/:id', bookCtrl.delete)
router.put('/:id', bookCtrl.update)

module.exports = router;
