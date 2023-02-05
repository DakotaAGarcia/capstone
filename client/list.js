const baseURL = "http://localhost:4321"


const placeList = document.querySelector('#placeListCard')
const eventList = document.querySelector('#eventListCard')
const createPlaceListTemplate = (place) => {
    const newPlaceListTemp = document.createElement('section')
    newPlaceListTemp.classList.add('list-template')

    newPlaceListTemp.innerHTML = `
    <img class="placesPic "src =${place.picture}/>

    <p>${place.place}</p>

    <section>
    <button onclick="updatePlaceList(${place.id}, 'downvote')" >-</button>
    Rating: ${place.stars}
    <button onclick="updatePlaceList(${place.id}, 'upvote')">+</button>
    </section>
    
    <button onclick="deletePlaceList(${place.id})">Remove</button>

    `
    placeList.appendChild(newPlaceListTemp)
}
const displayPlaceList = (arr) =>{
    for(i=0; i < arr.length; i++){
        createPlaceListTemplate(arr[i])
        
        }
    }
    const getPlacesList = () =>{
        axios.get(`${baseURL}/placelist`)
        .then((res) =>{
            console.log(res.data)
    
            displayPlaceList(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    const deletePlaceList = (id) =>{
        axios.delete(`${baseURL}/placelist/${id}`)
        .then((res) =>{
    
            console.log(res.data)
    
            placeList.innerHTML = ``
    
            displayPlaceList(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    
    
    const updatePlaceList = (id, type) =>{
    
        let bodyObj ={
    
           type: type 
        }
    
        axios.put(`${baseURL}/placelist/${id}`, bodyObj)
        .then((res) => {
            console.log(res.data)
    
            placeList.innerHTML = ``
    console.log(res.data)
            displayPlaceList(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    getPlacesList()

    

    const createEventsListTemplate = (event) => {
        const newEventListTemp = document.createElement('section')
        newEventListTemp.classList.add('event-list-template')
    
        newEventListTemp.innerHTML = `
        <img class="eventsPic "src =${event.picture}/>
    
        <p>${event.event}</p>
    
        <section>
        <button onclick="updateEventList(${event.id}, 'downvote')" >-</button>
        Rating: ${event.stars}
        <button onclick="updateEventList(${event.id}, 'upvote')">+</button>
        </section>
       
        <button onclick="deleteEventList(${event.id})">Remove</button>
    
        `
        eventList.appendChild(newEventListTemp)
    }
    
    
    const displayEventsList = (arr) =>{
    for(i=0; i < arr.length; i++){
        createEventsListTemplate(arr[i])
        }
    }
    const getEventsList = () =>{
        axios.get(`${baseURL}/eventlist`)
        .then((res) =>{
            console.log(res.data)
    
            displayEventsList(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
   
    
    const deleteEventList = (id) =>{
        axios.delete(`${baseURL}/eventlist/${id}`)
        .then((res) =>{
    
            console.log(res.data)
    
            eventList.innerHTML = ``
    
            displayEventsList(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    
    
    const updateEventList = (id, type) =>{
    
        let bodyObj ={
    
           type: type 
        }
    
        axios.put(`${baseURL}/eventlist/${id}`, bodyObj)
        .then((res) => {
            console.log(res.data)
    
            eventList.innerHTML = ``
    
            displayEventsList(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    getEventsList()