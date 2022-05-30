const express = require('express')
const fs = require('fs')
const app = express()
const readXlsxFile = require('read-excel-file/node')
const port = 3000

readXlsxFile('data.xlsx').then((rows) => {
	fs.writeFile('data.json', JSON.stringify(rows), err => {
		if (err) {
			console.error(err);
			return
		}
	});
})

app.listen(port, () => {
	console.log(`All works - port ${port}`)
})