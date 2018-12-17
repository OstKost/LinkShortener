const urlSchema = require('./schema')
const errorHandler = require('./utils/errorHandler')
const urlChecker = require('./utils/urlChecker')

const getFullUrl = async (req, res) => {
	try {
		const result = await urlSchema.findOne({
			shortUrl: req.params.shortUrl
		})
		if (result) {
			res.redirect(301, result.fullUrl)
		} else {
			const originalUrl = req.protocol + '://' + req.get('host')
			res.redirect(301, originalUrl)
			// errorHandler(res, { message: 'URL not found!' })
		}
	} catch (error) {
		errorHandler(res, error)
	}
}

const createShortUrl = async (req, res) => {
	let fullUrl = ''
	let shortCode = ''
	// если введенный полный адрес существует, то возвращаем его
	fullUrl = await urlSchema.findOne({ fullUrl: req.body.fullUrl })
	if (fullUrl) {
		res.status(200).json(fullUrl)
		return
	} else {
		fullUrl = req.body.fullUrl
	}
	// если введенный короткий адрес существует, то возвращаем ошибку
	shortCode = req.body.shortCode && shortCodeExists(req.body.shortCode)
	if (shortCode) {
		errorHandler(res, { message: 'Short URL already exists!' })
		return
	}
	// проверяем введенный полный адрес на работоспособность
	const urlExist = await urlChecker.checkUrl(fullUrl)
	if (!urlExist) {
		errorHandler(res, { message: 'URL is not responding!' })
		return
	}
	// создаём короткий адрес
	shortCode = req.body.shortUrl || (await generateShortCode())
	const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`
	const expiration = generateExpirationDate()
	// записываем в базу
	try {
		url = await urlSchema.create({
			fullUrl,
			shortUrl,
			shortCode,
			expiration
		})
		res.status(200).json(url)
	} catch (error) {
		errorHandler(res, error)
	}
}

async function shortCodeExists(shortUrl) {
	return !!(await urlSchema.findOne({ shortUrl }))
}

async function generateShortCode() {
	let shortUrl = Math.random()
		.toString(32)
		.slice(2, 8)
	if (await shortCodeExists(shortUrl)) shortUrl = generateShortCode()
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
	createShortUrl
}
