const express = require('express')
const app = express()

const port = 3000

app.use(express.static('public'))

let nrOfVisitors = 0

//Räknar antal besökare
app.get('/', (req, res, next) => {})

//Skickar tillbaka ett svart
app.get('/', (req, res, next) => {
	res.send('Hello Visitors' + nrOfVisitors)
})

app.post('/', (req, res) => {
	res.send('Got a POST request')
})

app.put('/user', (req, res) => {
	res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
	res.send('Got a DELETE request at /user')
})

app.listen(port, () =>
	console.log(`Server running on http://localhost:${port}`)
)

const array = [
	{
		name: 'Viktor',
		age: 30,
		someting: 'Something',
	},
]
