getFullUrl = (req, res) => {
    console.log('getFullUrl')
    res.send('getFullUrl')
}

createShortUrl = (req, res) => {
    console.log('createShortUrl')
    res.send('createShortUrl')
}

module.exports = {
	getFullUrl,
	createShortUrl
}
