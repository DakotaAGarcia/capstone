let db = require("./db.json");

let eventsArray = db.eventsArray;
let globalId = 13

module.exports = {

        getEvents: (req, res) =>{
            res.status(200).send(eventsArray)
        },
        addEvents: (req, res) =>{
            const {event, url, info} = req.body
    
            let newEvent = {
                id: globalId,
                event: event,
                info: info,
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
             // Limit the number of stars to 5
  eventsArray[index].stars = Math.min(5, eventsArray[index].stars)
  eventsArray[index].stars = Math.max(0, eventsArray[index].stars)

  let starString = "";
  for (let i = 0; i < eventsArray[index].stars; i++) {
    starString += "&#9734;";
  }

  eventsArray[index].starString = starString;
            res.status(200).send(eventsArray)
        }
    
}