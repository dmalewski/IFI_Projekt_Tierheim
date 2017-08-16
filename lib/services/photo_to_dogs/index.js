const {read_one} = require("/lib/services/read_one_dog");
const {findPhoto} = require('/lib/services/findPhoto');


const photo_to_dogs = (dog_id) =>   
    MongoClient
       .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("photos");

        
            return collection.findOne({
                dog_id}
            ).then((photo) => {
                db.close();
                return photo;
            });          
        });

module.exports.findPhoto = findPhoto;


      read_one(dog.id)
        .then((result) => {
            findPhoto(id)
              .then((photo) => {
                const foto = photo;
                console.log(dog.name);  
                console.log(dog.id);  
                console.log(foto.filename);     
              });     
        });       