const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')('dev')
const routes = require('./routes')
const path = require('path')
const config = require('../config.json')

const mongoURI = `mongodb://${config.mongo_uri}/${config.dbname}`

mongoose
	.connect(
		mongoURI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('MongoDB connected!'))
	.catch(error => console.error(error))

app.use(morgan)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', routes)

if (process.env.NODE_ENV === 'production') {
	const buildDir = path.resolve(__dirname, '..', 'client', 'build')
	app.use(express.static(buildDir))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(buildDir, 'index.html'))
	})
}

module.exports = app
