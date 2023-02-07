let db = require("./db.json");
let placesArray = db.placesArray;


let globalId = 13;

module.exports = {
    getPlaces: (req, res) =>{
        res.status(200).send(placesArray)
    },
    addPlaces: (req, res) =>{
        const {place, url, info} = req.body

        let newPlace = {
            id: globalId,
            place: place,
            info: info,
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
          // Limit the number of stars to 5
  placesArray[index].stars = Math.min(5, placesArray[index].stars)
  placesArray[index].stars = Math.max(0, placesArray[index].stars)

  let starString = "";
  for (let i = 0; i < placesArray[index].stars; i++) {
    starString += "&#9734;";
  }

  placesArray[index].starString = starString;
        res.status(200).send(placesArray)
    },


}
