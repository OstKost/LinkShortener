const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
	fullUrl: {
		type: String,
		required: true
	},
	shortUrl: {
		type: String,
		required: true
	},
	used: {
		type: Number
	}
})

module.exports = mongoose.model('urls', urlSchema)
