const axios = require('axios')
const _url = require('url')

async function checkUrl(fullUrl) {
	const { protocol, href } = { ..._url.parse(fullUrl) }
	const baseUrl = href.slice(-1) === '/' ? href.slice(0, -1) : href
	let url = ''

	// если в адресе есть http или https
	if (protocol) {
		url = baseUrl
		try {
			if (await axios.head(url)) return url
		} catch (error) {
			console.error(error.message)
		}
	}

	// если https или http нет в адресе
	try {
		url = `https://${baseUrl}`
		if (await axios.head(url)) return url
	} catch (error) {
		console.error(error.message)
	}

	try {
		url = `http://${baseUrl}`
		if (await axios.head(url)) return url
	} catch (error) {
		console.error(error.message)
	}

	return false
}

module.exports = {
	checkUrl
}
