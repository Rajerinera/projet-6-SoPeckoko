const express = require('express');
const router = express.Router();
const saucesCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');


router.post('/', auth, saucesCtrl.createThing);

router.use('/', auth, saucesCtrl.getAllSauces);

router.get('/:id', auth, saucesCtrl.getOneThing);

router.put('/:id', auth, saucesCtrl.modifyThing);

router.delete('/:id', auth, saucesCtrl.deleteThing);

module.exports = router;