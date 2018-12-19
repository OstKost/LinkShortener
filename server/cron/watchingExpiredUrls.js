const cron = require('node-cron')
const mongoose = require('mongoose')
const urlSchema = require('../schema')

function watchingExpiredUrls() {
	console.log('Watching for expired URLs')
	// каждый день в полночь
	cron.schedule('0 0 * * *', () => {
		const mongoURI = 'mongodb://localhost:27017/shorturls'
		mongoose
			.connect(
				mongoURI,
				{ useNewUrlParser: true }
			)
			.then(async () => {
				const now = new Date()
				const query = { expiration: { $lte: now } }
				const result = await urlSchema.deleteMany(query)
				console.log('Expired URLs has been cleared:', result)
				mongoose.connection.close()
			})
			.catch(error => console.error(error))
	})
}

module.exports = watchingExpiredUrls
