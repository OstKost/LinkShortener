const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

const mongoURI = 'mongodb://localhost:27017/shorturls'

mongoose
	.connect(
		mongoURI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('MongoDB connected!'))
	.catch(error => console.error(error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', routes)

module.exports = app
