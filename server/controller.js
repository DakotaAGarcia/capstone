let db = require("./db.json");
let placesArray = db.placesArray;


let globalId = 5;

module.exports = {
    getPlaces: (req, res) =>{
        res.status(200).send(placesArray)
    },
    addPlaces: (req, res) =>{
        const {place, url} = req.body

        let newPlace = {
            id: globalId,
            place: place,
            picture: url,
            stars: 0
        }

        placesArray.push(newPlace)

        globalId ++

        res.status(200).send(placesArray)

    },

    deletePlace: (req, res) =>{
        const index = placesArray.findIndex((el) => el.id === +req.params.id)

        placesArray.splice( index, 1)

        res.status(200).send(placesArray)
    },

    updatePlace: (req, res) => {
        const index = placesArray.findIndex((el) => el.id === +req.params.id)

        const {type} = req.body

        if(type === 'upvote'){
            placesArray[index].stars++
        }else if(type === 'downvote'){
            placesArray[index].stars--
        }

        res.status(200).send(placesArray)
    }
}