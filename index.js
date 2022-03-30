const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index')
})

app.post('/CSS', (req, res) => {
	res.render('CSS')
})

app.post('/WAFS', (req, res) => {
	res.render('WAFS')
})

app.post('/Browser', (req, res) => {
	res.render('Browser')
})

app.post('/PWA', (req, res) => {
	res.render('PWA')
})

app.use((req, res) => {
	res.status(404).send(':(')
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})
