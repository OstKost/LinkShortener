const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/:shortCode', controller.getFullUrl)

router.post('/', controller.createShortUrl)

module.exports = router
