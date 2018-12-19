const urlSchema = require('./schema')
const errorHandler = require('./utils/errorHandler')
const urlChecker = require('./utils/urlChecker')
const path = require('path')

const getFullUrl = async (req, res) => {
	try {
		const result = await urlSchema.findOne({ ...req.params })
		if (result) {
			res.redirect(301, result.fullUrl)
		} else {
			res.sendFile(
				path.resolve(__dirname, '..', 'client', 'build', 'index.html')
			)
		}
	} catch (error) {
		errorHandler(res, error)
	}
}

const createShortUrl = async (req, res) => {
	const reqCode = req.body.shortCode
	const reqUrl = req.body.fullUrl

	// если введенный короткий адрес существует, то возвращаем ошибку
	const existCode = reqCode && (await shortCodeExists(reqCode))
	if (existCode) {
		errorHandler(res, { message: 'Sorry. Same short URL already exist!' })
		return
	}

	// проверяем введенный полный адрес на работоспособность
	const fullUrl = await urlChecker.checkUrl(reqUrl)
	console.log(fullUrl)
	if (!fullUrl) {
		errorHandler(res, { message: 'URL is not responding!' })
		return
	}

	// если введенный полный адрес существует, то возвращаем его
	const existData = await urlSchema.findOne({ fullUrl })
	if (existData) {
		res.status(200).json({
			...existData._doc,
			success: true,
			message: 'Same full URL already exist!'
		})
		return
	}

	// создаём короткий код, адрес и дату удаления
	const shortCode = reqCode || (await generateShortCode())
	const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`
	const expiration = generateExpirationDate()
	// записываем в базу
	try {
		const response = await urlSchema.create({
			fullUrl,
			shortCode,
			shortUrl,
			expiration
		})		
		res.status(200).json({
			...response._doc,
			success: true,
			message: 'You short URL is ready! Copy and share it!'
		})
	} catch (error) {
		errorHandler(res, error)
	}
}

async function shortCodeExists(shortCode) {
	return !!(await urlSchema.findOne({ shortCode }))
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
