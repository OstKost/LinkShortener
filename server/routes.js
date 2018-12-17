const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/:shortUrl', controller.getFullUrl)

router.post('/', controller.create)

module.exports = router
