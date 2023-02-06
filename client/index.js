const baseURL = "http://localhost:4321"

const placesTemp = document.querySelector('#placesCard')

const eventsTemp = document.querySelector('#eventsCard')

const placeList = document.querySelector('#placeListCard')

const eventList = document.querySelector('#eventListCard')

const addNewPlace = document.querySelector('#addAPlace')

const addNewEvent = document.querySelector('#addAnEvent')

const signUp = document.querySelector('#sign-up')

const emailInput = document.querySelector(".email-sign-up")

const footer = document.querySelector("footer")


//----------------------------------------------------------
//-------------------------places---------------------------
//----------------------------------------------------------


const createPlacesTemplate = (place) => {
    const newPlaceTemp = document.createElement('section')
    newPlaceTemp.classList.add('place-template')

    newPlaceTemp.innerHTML = `
    <div class="asdf">
    <div class="container">
    <p class="text">${place.info}</p></div>
    <img onclick="this.classList.add('hidden')" class="placesPic "src =${place.picture}/>
    <section>
    <p>${place.place}</p>
    
    
    <div id="place-stars">
    ${place.starString||"Leave a rating"} </div>
    <button class="ratingbtn" onclick="updatePlace(${place.id}, 'downvote')" >-</button>
    <button class="ratingbtn" onclick="updatePlace(${place.id}, 'upvote')">+</button>
    </section>
    
    <button onclick="addToList(${place.id})">add to list</button>
    </div>
    `
    placesTemp.appendChild(newPlaceTemp)
}


const displayAllPlaces = (arr) =>{
for(i=0; i < arr.length; i++){
    createPlacesTemplate(arr[i])
    }
}


const getAllPlaces = () =>{
    axios.get(`${baseURL}/places`)
    .then((res) =>{
        console.log(res.data)

        displayAllPlaces(res.data)
    })
    .catch((err) =>{
        console.log(err)
    })
}

const deletePlace = (id) =>{
    axios.delete(`${baseURL}/places/${id}`)
    .then((res) =>{

        console.log(res.data)

        placesTemp.innerHTML = ``

        displayAllPlaces(res.data)
    })
    .catch((err) =>{
        console.log(err)
    })
}

const addPlace = () =>{
    placesTemp.innerHTML = ``

    const place = document.querySelector('#placeName')

    const picture = document.querySelector('#placePicture')

    let bodyObj = {
        place: place.value,
        url:picture.value
    }
    axios.post(`${baseURL}/places`, bodyObj)
    .then((res) =>{

        console.log(res.data)


        displayAllPlaces(res.data)

        place.value = ''
        picture.value = ''


    })
    .catch((err) =>{
        console.log(err)
    })

}

const updatePlace = (id, type) =>{

    let bodyObj ={

       type: type 
    }

    axios.put(`${baseURL}/places/${id}`, bodyObj)
    .then((res) => {
        console.log(res.data)

        placesTemp.innerHTML = ``

        displayAllPlaces(res.data)
    })
    .catch((err) =>{
        console.log(err)
    })
}
//-------------------places list---------------------------

const addToList = (id)=>{
    axios.post(`${baseURL}/placelist/${id}`)
.then((res)=>{
    console.log(res.data)
    placesTemp.innerHTML= ``
    displayAllPlaces(res.data)
})
}

//----------------------------------------------------------
//-------------------------Events---------------------------
//----------------------------------------------------------

const createEventsTemplate = (event) => {
    const newEventTemp = document.createElement('section')
    newEventTemp.classList.add('event-template')

    newEventTemp.innerHTML = `
    <img class="eventsPic "src =${event.picture}/>
    
    <p>${event.event}</p>

    <section>
    <div id="event-stars">
    ${event.starString||"Leave a rating"} </div>
    <button class="ratingbtn" onclick="updateEvent(${event.id}, 'downvote')" >-</button>
    <button class="ratingbtn" onclick="updateEvent(${event.id}, 'upvote')">+</button>
    </section>
    <br>
    <button onclick="addEventsToList(${event.id})">add to list</button>
    

    `
    eventsTemp.appendChild(newEventTemp)
}


const displayAllEvents = (arr) =>{
for(i=0; i < arr.length; i++){
    createEventsTemplate(arr[i])
    }
}


const getAllEvents = () =>{
    axios.get(`${baseURL}/events`)
    .then((res) =>{
        console.log(res.data)

        displayAllEvents(res.data)
    })
    .catch((err) =>{
        console.log(err)
    })
}

const deleteEvent = (id) =>{
    axios.delete(`${baseURL}/events/${id}`)
    .then((res) =>{

        console.log(res.data)

        eventsTemp.innerHTML = ``

        displayAllEvents(res.data)
    })
    .catch((err) =>{
        console.log(err)
    })
}

const addEvent = () =>{
    eventsTemp.innerHTML = ``

    const event = document.querySelector('#eventName')

    const picture = document.querySelector('#eventPicture')

    let bodyObj = {
        event: event.value,
        url:picture.value
    }
    axios.post(`${baseURL}/events`, bodyObj)
    .then((res) =>{

        console.log(res.data)


        displayAllEvents(res.data)

        event.value = ''
        picture.value = ''


    })
    .catch((err) =>{
        console.log(err)
    })

}

const updateEvent = (id, type) =>{

    let bodyObj ={

       type: type 
    }

    axios.put(`${baseURL}/events/${id}`, bodyObj)
    .then((res) => {
        console.log(res.data)

        eventsTemp.innerHTML = ``

        displayAllEvents(res.data)
    })
    .catch((err) =>{
        console.log(err)
    })
}
//---------------------events list--------------------------
const addEventsToList = (id)=>{
    axios.post(`${baseURL}/eventlist/${id}`)
.then((res)=>{
    console.log(res.data)

    displayAllEvents(res.data)
    eventsTemp.innerHTML = ``
    displayAllEvents(res.data)
})
}

//----------------------------------------------------------
//-------------------------misc-----------------------------
//----------------------------------------------------------


const emailHandler = () =>{
    let confirmation = document.createElement('p')
    confirmation.classList.add('confirm');
    confirmation.textContent = "congrats welcome to the fam!"
    emailInput.remove()
    footer.appendChild(confirmation);
}

signUp.addEventListener('click', emailHandler)
addNewPlace.addEventListener('click',addPlace)
addNewEvent.addEventListener('click',addEvent)

getAllPlaces()
getAllEvents()
