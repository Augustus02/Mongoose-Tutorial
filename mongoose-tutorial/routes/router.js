const express = require('express');

// We require the ctrl file where all of our functions are
const ctrl = require('../controller/ctrl')
const router = express.Router()

// We then set each operation with a function and a route
router.get('/' , ctrl.getItems)
router.put('/' , ctrl.updateItem)
router.post('/', ctrl.createItem)
router.delete('/', ctrl.deleteItem)

// then we exprt the routes
module.exports = router