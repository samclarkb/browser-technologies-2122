const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

let CSS
let WAFS
let BT
let PWA
let Home

app.get('/', (req, res) => {
	res.render('index', { Home })
})

app.get('/CSS', (req, res) => {
	res.render('CSS', { CSS })
})

app.post('/CSS', (req, res) => {
	Home = {
		name: req.body.name,
		studentNmbr: req.body.studentNmbr,
	}
	res.render('CSS', { CSS })
})

app.get('/WAFS', (req, res) => {
	res.render('WAFS', { WAFS })
})

app.post('/WAFS', (req, res) => {
	CSS = {
		teachers: req.body.teachers,
		date1: req.body.date1,
		date2: req.body.date2,
		grade: req.body.grade,
		quality: req.body.quality,
		explanation: req.body.explanation,
		learning: req.body.learning,
	}
	res.render('WAFS', { WAFS })
})

app.get('/BT', (req, res) => {
	res.render('BT', { BT })
})

app.post('/BT', (req, res) => {
	PWA = {
		teachers: req.body.teachers,
		date1: req.body.date1,
		date2: req.body.date2,
		grade: req.body.grade,
		quality: req.body.quality,
		explanation: req.body.explanation,
		learning: req.body.learning,
	}
	res.render('BT', { BT })
})

app.get('/PWA', (req, res) => {
	res.render('PWA', { PWA })
})

app.post('/PWA', (req, res) => {
	WAFS = {
		teachers: req.body.teachers,
		date1: req.body.date1,
		date2: req.body.date2,
		grade: req.body.grade,
		quality: req.body.quality,
		explanation: req.body.explanation,
		learning: req.body.learning,
	}
	res.render('PWA', { PWA })
})

app.post('/Succes', (req, res) => {
	BT = {
		teachers: req.body.teachers,
		date1: req.body.date1,
		date2: req.body.date2,
		grade: req.body.grade,
		quality: req.body.quality,
		explanation: req.body.explanation,
		learning: req.body.learning,
	}
	res.render('Succes')
})

app.get('/Succes', (req, res) => {
	res.render('Succes')
})

app.use((req, res) => {
	res.status(404).send(':(')
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})
