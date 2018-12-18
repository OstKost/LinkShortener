const axios = require('axios')
const url = require('url')

async function checkUrl(fullUrl) {
	const result = url.parse(fullUrl)

	if (result.protocol) {
		try {
			if (await axios.head(result.href)) return true
		} catch (error) {
			// console.error(error)
		}
	}

	try {
		if (await axios.head(`https://${result.href}`)) return true
	} catch (error) {
		// console.error(error)
	}

	try {
		if (await axios.head(`http://${result.href}`)) return true
	} catch (error) {
		// console.error(error)
	}

	return false
}

module.exports = {
	checkUrl
}
