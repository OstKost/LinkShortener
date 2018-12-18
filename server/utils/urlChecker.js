const axios = require('axios')
const _url = require('url')

async function checkUrl(fullUrl) {
	const parsedUrl = _url.parse(fullUrl)
	let url = ''

	if (parsedUrl.protocol) {
		url = parsedUrl.href
		try {
			if (await axios.head(url)) return url
		} catch (error) {
			console.error(error.message)
		}
	}

	try {
		url = `https://${parsedUrl.href}`
		if (await axios.head(url)) return url
	} catch (error) {
		console.error(error.message)
	}

	try {
		url = `http://${parsedUrl.href}`
		if (await axios.head(url)) return url
	} catch (error) {
		console.error(error.message)
	}

	return false
}

module.exports = {
	checkUrl
}
