// const baseURL = "http://localhost:4321"

// const placesTemp = document.querySelector('#placesCard')

// const placeList = document.querySelector('#placeListCard')

// const addNewPlace = document.querySelector('#addAPlace')

// const signUp = document.querySelector('#sign-up')

// const emailInput = document.querySelector(".email-sign-up")

// const footer = document.querySelector("footer")

// //----------------------------------------------------------
// //-------------------------places---------------------------
// //----------------------------------------------------------

// const createPlacesTemplate = (place) => {
//     const newPlaceTemp = document.createElement('section')
//     newPlaceTemp.classList.add('place-template')
// console.log(place.picture)
//     newPlaceTemp.innerHTML = `
//     <img class="placesPic "src =${place.picture}/>

//     <p>${place.place}</p>

//     <section>
//     <button onclick="updatePlace(${place.id}, 'downvote')" >-</button>
//     Rating: ${place.stars}
//     <button onclick="updatePlace(${place.id}, 'upvote')">+</button>
//     </section>
//     <button onclick="addToList(${place.id})">add </button>
//     <button onclick="deletePlace(${place.id})">Remove</button>

//     `
//     placesTemp.appendChild(newPlaceTemp)
// }


// const displayAllPlaces = (arr) =>{
// for(i=0; i < arr.length; i++){
//     createPlacesTemplate(arr[i])
//     }
// }


// const getAllPlaces = () =>{
//     axios.get(`${baseURL}/places`)
//     .then((res) =>{
//         console.log(res.data)

//         displayAllPlaces(res.data)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// }

// const deletePlace = (id) =>{
//     axios.delete(`${baseURL}/places/${id}`)
//     .then((res) =>{

//         console.log(res.data)

//         placesTemp.innerHTML = ``

//         displayAllPlaces(res.data)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// }

// const addPlace = () =>{
//     placesTemp.innerHTML = ``

//     const place = document.querySelector('#placeName')

//     const picture = document.querySelector('#placePicture')

//     let bodyObj = {
//         place: place.value,
//         url:picture.value
//     }
//     axios.post(`${baseURL}/places`, bodyObj)
//     .then((res) =>{

//         console.log(res.data)


//         displayAllPlaces(res.data)

//         place.value = ''
//         picture.value = ''


//     })
//     .catch((err) =>{
//         console.log(err)
//     })

// }

// const updatePlace = (id, type) =>{

//     let bodyObj ={

//        type: type 
//     }

//     axios.put(`${baseURL}/places/${id}`, bodyObj)
//     .then((res) => {
//         console.log(res.data)

//         placesTemp.innerHTML = ``

//         displayAllPlaces(res.data)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// }
// //-------------------places list---------------------------

// const createPlaceListTemplate = (place) => {
//     const newPlaceTemp = document.createElement('section')
//     newPlaceTemp.classList.add('place-template')
// console.log(place.picture)
//     newPlaceTemp.innerHTML = `
//     <img class="placesPic "src =${place.picture}/>

//     <p>${place.place}</p>

//     <section>
//     <button onclick="updatePlace(${place.id}, 'downvote')" >-</button>
//     Rating: ${place.stars}
//     <button onclick="updatePlace(${place.id}, 'upvote')">+</button>
//     </section>
//     <button onclick="addToList(${place.id})">add </button>
//     <button onclick="deletePlace(${place.id})">Remove</button>

//     `
//     placeList.appendChild(newPlaceTemp)
// }
// const displayPlaceList = (arr) =>{
//     for(i=0; i < arr.length; i++){
//         createPlacesListTemplate(arr[i])
//         }
//     }

// const addToList = (id)=>{
//     axios.post(`${baseURL}/list/${id}`)
// .then((res)=>{
//     console.log(res.data)

//     displayPlaceList(res.data)
// })
// }



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
// addNewPlace.addEventListener('click',addPlace)
// getAllPlaces()
