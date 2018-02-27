const express = require('express')
const app = express()

const items = require('./items')


app.get('/search', (req, res) => {
	results = []

	for (index in items) {
		item = items[index]
		if (item.name.includes(req.query.name)) {
			results.push(item)
		}
	}

	res.send({items: results})
})

app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000'))