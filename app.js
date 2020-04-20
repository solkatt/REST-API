const data = require('./data.json')

const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

//This is forPublic Folder on path /

const products = [
	{
		id: 0,
		name: 'Oberheim OB-Xa',
		price: 11499,
		condition: "good"

	},
	{
		id: 1,
		name: 'Roland JD-800',
		price: 14999,
		condition: "like new"

	},
	{
		id: 2,
		name: 'Yamaha CS-80',
		price: 21999,
		condition: "poor"
	},
	{
		id: 3,
		name: 'Korg Wavestation',
		price: 12999,
		condition: "good"
	},
	{
		id: 4,
		name: 'Yamaha DX7',
		price: 9499,
		condition: "good"
	},
	{
		id: 5,
		name: 'ARP 2600',
		price: 4739,
		condition: "good"
	},
	{
		id: 6,
		name: 'PPG Wave 2.2/3',
		price: 1337,
		condition: "good"
	},
	{
		id: 7,
		name: 'Sequential Circuits Prophet-5',
		price: 5359,
		condition: "good"
	},
	{
		id: 8,
		name: 'EMS VCS3',
		price: 5399,
		condition: "good"
	},
	{
		id: 9,
		name: 'Moog Minimoog',
		price: 13299,
		condition: "good"
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

app.get('/api/products', (req, res) => {
	res.send(products)
})

app.get('/api/products/:id', (req, res) => {
	const product = products.find(
		(product) => product.id === parseInt(req.params.id)
	)
	if (!product) {
		res.status(404).send('The product with the given ID was not found')
		return
	}
	res.send(product)
})

app.post('/api/products', (req, res) => {

	
	// Validation
	if (!req.body.name || req.body.name.length < 3) {
		res.status(400).send('Product name is required & must be minimum 3 Characters')
		return
	}
	//

	const product = {
		id: products.length + 1,
		name: req.body.name,
		price: req.body.price,
		condition: req.body.condition
	}
	products.push(product)
	res.send(product)
})


app.put('/api/products/:id', (req, res) => {
	const product = products.find(
		(product) => product.id === parseInt(req.params.id)
	)
	if (!product) {
		res.status(404).send('The product with the given ID was not found')
		return
	}

	product.name = req.body.name
	product.price = req.body.price,
	product.condition = req.body.condition
	res.send(product)
})

app.delete('/api/products/:id', (req, res) => {
	const product = products.find(
		(product) => product.id === parseInt(req.params.id)
	)
	if (!product) {
		res.status(404).send('The product with the given ID was not found')
		return
	}
	// Delete
	const index = products.indexOf(product)
	products.splice(index, 1)

	res.send(product)
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
