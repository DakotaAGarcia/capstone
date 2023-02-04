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

const{getEvents, addEvents, deleteEvent, updateEvent} = require('./controllerTwo')

app.get('/events',getEvents)

app.post('/events', addEvents)

app.delete('/events/:id', deleteEvent)

app.put('/events/:id', updateEvent)

//endpoints for list

const{addToList, getPlacesList, deletePlaceList, updatePlaceList, getEventsList, addEventsToList, deleteEventList, updateEventList} = require('./controllerThree')

app.post('/placelist/:id', addToList)

app.get('/placelist', getPlacesList)

app.delete('/placelist/:id', deletePlaceList)

app.put('/placelist/:id', updatePlaceList)

app.post('/eventlist/:id', addEventsToList)

app.get('/eventlist', getEventsList)

app.delete('/eventlist/:id', deleteEventList)

app.put('/eventlist/:id', updateEventList)


//start server with app.listen
app.listen(4321, () => console.log('4321 lets gooooooo'))