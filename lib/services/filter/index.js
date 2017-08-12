const { MongoClient } = require('mongodb');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const filter= (sizes,genders,breed,ages,traits) => 
    MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection("dogs");

            const criteria = [];

            if(sizes.length) {
                criteria.push({
                     height: {
                        "$in": sizes
                    }
                })
            }

             if(breed.length) { 
                criteria.push({
                    bread: breed
                })
            }

            if(genders.length) {
                criteria.push({
                    gender: {
                        "$in": genders
                    }
                })
            }

            if(ages.length) {       
                criteria.push({     
                    age: {
                        "$in": ages
                    }
                })
            }


           if(traits.length) {       
                criteria.push({ 
                    traits: {
                        "$in": traits
                    }
                })
           }

            // console.log(criteria);

            // Beim "Zurück"-Klicken bleiben Werte im Array, wie bekommtm man die weg? (Firefox ist das Problem)
            return collection.find({
                    $and: criteria  
                }).toArray().then((results) => {
                db.close();
                return results;
            });          
    });

    module.exports.filter = filter;