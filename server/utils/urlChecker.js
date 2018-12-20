const axios = require('axios')
const _url = require('url')

async function checkUrl(fullUrl) {
	const hasProtocol = /^(http:\/\/|https:\/\/)./.test(fullUrl)
	const url = (hasProtocol ? '' : 'https://') + fullUrl
	const href = _url.parse(url).href

	try {
		if (await axios.head(href)) return href
		if (await axios.head(href.replace('https', 'http'))) return href
	} catch (error) {
		console.error(error.message)
	}

	return false
}

module.exports = {
	checkUrl
}
