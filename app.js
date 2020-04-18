const express = require('express')
const path = require('path')

const app = express()

const port = 3000

const members = [
	{
		id: 1,
		name: 'Malin Mulin',
		email: 'mallanbrallan@gmail.com ',
		status: 'active',
	},
	{
		id: 2,
		name: 'Skurt Nillsson',
		email: 'skurtnillssonmedtval@gmail.com ',
		status: 'inactive',
	},
	{
		id: 3,
		name: 'Godzilla Hårddisksson',
		email: 'harddisksson_godzilla@gmail.com ',
		status: 'active',
	},
	{
		id: 4,
		name: 'Duck',
		email: 'duckduckduck@gmail.com ',
		status: 'inactive',
	},
]

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
	next()
}

// Init Middleware
// app.use(logger)

//Gets All Members
app.get('/api/members', (req, res) => {
	res.json(members)
})

// Get Single Member
app.get('/api/members/:id', (req, res) => {})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
