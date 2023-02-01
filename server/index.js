//require packages
const express = require('express')
const cors = require('cors')
//app instances
const app = express()
//middleware
app.use(express.json())
app.use(cors())
//endpoints for places

const{getPlaces, addPlaces, deletePlace, updatePlace} = require('./controller')

app.get('/places',getPlaces)

app.post('/places', addPlaces)

app.delete('/places/:id', deletePlace)

app.put('/places/:id', updatePlace)

//endpoints for events

const{getEvents, } = require('./controllerTwo')



//start server with app.listen
app.listen(4321, () => console.log('4321 lets gooooooo'))