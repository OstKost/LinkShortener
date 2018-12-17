const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
	fullUrl: {
		type: String,
		required: true,
		tags: { type: [String], index: true }
	},
	shortUrl: {
		type: String,
		required: true,
		tags: { type: [String], index: true }
	},
	used: {
		type: Number
	},
	expiration: {
		type: Date
	}
})

module.exports = mongoose.model('urls', urlSchema)
