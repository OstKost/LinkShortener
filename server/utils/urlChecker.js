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

// function checkStringForUrl(url) {
// 	const result = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.exec(
// 		url
// 	)
// 	console.log(result)
// 	return result
// }

module.exports = {
	checkUrl
}
