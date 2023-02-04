// const baseURL = "http://localhost:4321"



// const eventsTemp = document.querySelector('#eventsCard')



// const addNewEvent = document.querySelector('#addAnEvent')


// const signUp = document.querySelector('#sign-up')

// const emailInput = document.querySelector(".email-sign-up")

// const footer = document.querySelector("footer")

// //----------------------------------------------------------
// //-------------------------Events---------------------------
// //----------------------------------------------------------

// const createEventsTemplate = (event) => {
//     const newEventTemp = document.createElement('section')
//     newEventTemp.classList.add('event-template')

//     newEventTemp.innerHTML = `
//     <img class="placesPic "src =${event.picture}/>

//     <p>${event.event}</p>

//     <section>
//     <button onclick="updateEvent(${event.id}, 'downvote')" >-</button>
//     Rating: ${event.stars}
//     <button onclick="updateEvent(${event.id}, 'upvote')">+</button>
//     </section>
//     <button onclick="addToList(${event.id}, "add")>add</button>
//     <button onclick="deleteEvent(${event.id})">Remove</button>

//     `
//     eventsTemp.appendChild(newEventTemp)
// }


// const displayAllEvents = (arr) =>{
// for(i=0; i < arr.length; i++){
//     createEventsTemplate(arr[i])
//     }
// }


// const getAllEvents = () =>{
//     axios.get(`${baseURL}/events`)
//     .then((res) =>{
//         console.log(res.data)

//         displayAllEvents(res.data)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// }

// const deleteEvent = (id) =>{
//     axios.delete(`${baseURL}/events/${id}`)
//     .then((res) =>{

//         console.log(res.data)

//         eventsTemp.innerHTML = ``

//         displayAllEvents(res.data)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// }

// const addEvent = () =>{
//     eventsTemp.innerHTML = ``

//     const event = document.querySelector('#eventName')

//     const picture = document.querySelector('#eventPicture')

//     let bodyObj = {
//         event: event.value,
//         url:picture.value
//     }
//     axios.post(`${baseURL}/events`, bodyObj)
//     .then((res) =>{

//         console.log(res.data)


//         displayAllEvents(res.data)

//         event.value = ''
//         picture.value = ''


//     })
//     .catch((err) =>{
//         console.log(err)
//     })

// }

// const updateEvent = (id, type) =>{

//     let bodyObj ={

//        type: type 
//     }

//     axios.put(`${baseURL}/events/${id}`, bodyObj)
//     .then((res) => {
//         console.log(res.data)

//         eventsTemp.innerHTML = ``

//         displayAllEvents(res.data)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// }
// //---------------------events list--------------------------


// //----------------------------------------------------------
// //-------------------------misc-----------------------------
// //----------------------------------------------------------
// const emailHandler = () =>{
//     let confirmation = document.createElement('p');
//     confirmation.textContent = "congrats welcome to the fam!"
//     emailInput.remove()
//     footer.appendChild(confirmation);
// }

// signUp.addEventListener('click', emailHandler)
// addNewEvent.addEventListener('click',addEvent)

// getAllEvents()