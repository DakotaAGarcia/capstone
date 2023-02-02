let db = require("./db.json");

let eventsArray = db.eventsArray;
let globalId = 5

module.exports = {

        getEvents: (req, res) =>{
            res.status(200).send(eventsArray)
        },
        addEvents: (req, res) =>{
            const {event, url} = req.body
    
            let newEvent = {
                id: globalId,
                event: event,
                picture: url,
                stars: 0
            }
    
            eventsArray.push(newEvent)
    
            globalId ++
    
            res.status(200).send(eventsArray)
    
        },
    
        deleteEvent: (req, res) =>{
            const index = eventsArray.findIndex((el) => el.id === +req.params.id)
    
            eventsArray.splice( index, 1)
    
            res.status(200).send(eventsArray)
        },
    
        updateEvent: (req, res) => {
            const index = eventsArray.findIndex((el) => el.id === +req.params.id)
    
            const {type} = req.body
    
            if(type === 'upvote'){
                eventsArray[index].stars++
            }else if(type === 'downvote'){
                eventsArray[index].stars--
            }
    
            res.status(200).send(eventsArray)
        }
    
}