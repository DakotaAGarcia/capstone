const baseURL = "http://localhost:4321"

const placesTemp = document.querySelector('#placesCard')

const eventsTemp = document.querySelector('#eventsCard')

const addNewPlace = document.querySelector('#addAPlace')

const signUp = document.querySelector('#sign-up')

const emailInput = document.querySelector(".email-sign-up")

const footer = document.querySelector("footer")



const createPlacesTemplate = (place) => {
    const newPlaceTemp = document.createElement('section')
    newPlaceTemp.classList.add('place-template')
console.log(place.picture)
    newPlaceTemp.innerHTML = `
    <img class="placesPic "src =${place.picture}/>

    <p>${place.place}</p>

    <section>
    <button onclick="updatePlace(${place.id}, 'downvote')" >-</button>
    Rating: ${place.stars}
    <button onclick="updatePlace(${place.id}, 'upvote')">+</button>
    </section>
    <button onclick="addToList(${place.id})">add </button>
    <button onclick="deletePlace(${place.id})">Remove</button>

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

const addToList = ()=>{

}

const createEventsTemplate = (event) => {
    const newEventTemp = document.createElement('section')
    newEventTemp.classList.add('event-template')

    newEventTemp.innerHTML = `
    <img class="placesPic "src =${event.picture}/>

    <p>${event.event}</p>

    <section>
    <button onclick="updateEvent(${event.id}, 'downvote')" >-</button>
    Rating: ${event.stars}
    <button onclick="updateEvent(${event.id}, 'upvote')">+</button>
    </section>
    <button onclick="addToList(${event.id}, "add")>add</button>
    <button onclick="deleteEvent(${event.id})">Remove</button>

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



const emailHandler = () =>{
    let confirmation = document.createElement('p');
    confirmation.textContent = "congrats welcome to the fam!"
    emailInput.remove()
    footer.appendChild(confirmation);
}

signUp.addEventListener('click', emailHandler)
addNewPlace.addEventListener('click',addPlace)
getAllPlaces()
getAllEvents()