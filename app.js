const data = require('./data.json')

const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

//This is forPublic Folder on path /

const courses = [
	{
		id: 0,
		name: 'Malin',
	},
	{
		id: 1,
		name: 'Viktor',
	},
	{
		id: 2,
		name: 'Skurt',
	},
	{
		id: 3,
		name: 'Waldemar',
	},
]
app.use(express.static('public'))

//This is for Images Folder on path Images
app.use('/images', express.static('images'))

app.get('/', (req, res) => {
	res.send('Hello World')
	// Get Data first
	// res.json(data)
})

app.get('/api/courses', (req, res) => {
	res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(
		(course) => course.id === parseInt(req.params.id)
	)
	if (!course) {
		res.status(404).send('The course with the given ID was not found')
		return
	}
	res.send(course)
})

app.post('/api/courses', (req, res) => {
	// Validation
	if (!req.body.name || req.body.name.length < 3) {
		res.status(400).send('Name is required & be minimum 3 Characters')
		return
	}
	//

	const course = {
		id: courses.length + 1,
		name: req.body.name,
	}
	courses.push(course)
	res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
	const course = courses.find(
		(course) => course.id === parseInt(req.params.id)
	)
	if (!course) {
		res.status(404).send('The course with the given ID was not found')
		return
	}

	course.name = req.body.name
	res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
	const course = courses.find(
		(course) => course.id === parseInt(req.params.id)
	)
	if (!course) {
		res.status(404).send('The course with the given ID was not found')
		return
	}
	// Delete
	const index = courses.indexOf(course)
	courses.splice(index, 1)

	res.send(course)
})

/*
// Get single dataobject
app.get(
	'/item/:id',
	(req, res, next) => {
		console.log(req.params.id)
		let user = Number(req.params.id)
		console.log(user)
		console.log(data[user])
		res.send(data[user])
		next()
	},
	(req, res) => {
		console.log('Did you get the right data?')
	}
)

app.post('/item', (req, res) => {
	res.send(`a POST request with /newItem route on port ${port}`)
})

app.route('/item')
	.get((req, res) => {
		// res.download('images/forest.jpg')
		// res.redirect('http://www.linkedin.com')
		// res.end()
		res.send(`a GET request with /item route on port ${port}`)
	})
	.put((req, res) => {
		res.send(`a PUT request with /item route on port ${port}`)
	})
	.delete((req, res) => {
		res.send(`a DELETE request with /item route on port ${port}`)
	})





	*/
app.listen(port, () => {
	console.log(`Server is running on port: http://localhost:${port}`)
})
