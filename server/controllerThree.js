let db = require("./db.json");
let placesArray = db.placesArray
let eventsArray = db.eventsArray
let yourList = db.yourList;
let yourListTwo =db.yourListTwo


module.exports ={

addToList: (req, res) =>{
    const index = placesArray.findIndex((el) => el.id === +req.params.id)
let pushedPlace = placesArray.splice( index, 1)
    yourList.push(pushedPlace[0])

    res.status(200).send(placesArray)
    
},
getPlacesList: (req, res) =>{
    res.status(200).send(yourList)
},
deletePlaceList: (req, res) =>{
    const index = yourList.findIndex((el) => el.id === +req.params.id)

    yourList.splice( index, 1)

    res.status(200).send(yourList)
},
updatePlaceList: (req, res) =>{
    const index = yourList.findIndex((el) => el.id === +req.params.id)

    const {type} = req.body
    if(type === 'upvote'){
        yourList[index].stars++
    }else if(type === 'downvote'){
        yourList[index].stars--
    }
    
   
    res.status(200).send(yourList)
},
//-----------------------------events----------------------------------------

addEventsToList: (req, res) => {
    const index = eventsArray.findIndex((el) => el.id === +req.params.id)
    let pushedEvent = eventsArray.splice( index, 1)
    yourListTwo.push(pushedEvent[0])

    res.status(200).send(eventsArray)
},


getEventsList: (req, res) =>{
    res.status(200).send(yourListTwo)
},
deleteEventList: (req, res) =>{
    const index = yourListTwo.findIndex((el) => el.id === +req.params.id)

    yourListTwo.splice( index, 1)

    res.status(200).send(yourListTwo)
},
updateEventList: (req, res) =>{
    const index = yourListTwo.findIndex((el) => el.id === +req.params. id)

    const {type} = req.body
    if(type ==='upvote'){
    yourListTwo[index].stars++
    }else if(type === 'downvote'){
        yourListTwo[index].stars--
    }

    res.status(200).send(yourListTwo)
}
}