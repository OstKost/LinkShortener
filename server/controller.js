const urlSchema = require('./schema')
const errorHandler = require('./utils/errorHandler')

const getFullUrl = async (req, res) => {
	try {
		const url = await urlSchema.findOne({ shortUrl: req.params.shortUrl })
        res.status(200).json(url)
        // res.redirect(301, url)
	} catch (error) {
		errorHandler(res, error)
	}
}

const create = async (req, res) => {
	let fullUrl = ''
	let shortUrl = ''
	// если введенный полный адрес существует, то возвращаем его
	fullUrl = await urlSchema.findOne({ fullUrl: req.body.fullUrl })
	if (fullUrl) {
		res.status(200).json(fullUrl)
		return
	}
	// если введенный короткий адрес существует, то возвращаем ошибку
	shortUrl = await urlSchema.findOne({ shortUrl: req.body.shortUrl })
	if (shortUrl) {
		errorHandler(res, { message: 'Short URL already exists!' })
		return
	}
	// создаём короткий адрес
	shortUrl = req.body.shortUrl || generateShortUrl()
	const expiration = generateExpirationDate()
	try {
		url = await urlSchema.create({
			fullUrl: req.body.fullUrl,
			shortUrl,
			expiration
		})
		res.status(200).json(url)
	} catch (error) {
		errorHandler(res, error)
	}
}

async function shortUrlExists(shortUrl) {
	return !!(await urlSchema.findOne({ shortUrl }))
}

async function generateShortUrl() {
	let shortUrl = Math.floor(Math.random() * 6 + 2).toString(32)
	if (generateShortUrl(shortUrl)) shortUrl = generateShortUrl()
	return shortUrl
}

function generateExpirationDate() {
	const daysToExp = 16
	const today = new Date()
	return new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + daysToExp
	)
}

module.exports = {
	getFullUrl,
	create
}
