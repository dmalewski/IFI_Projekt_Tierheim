const { MongoClient } = require('mongodb');

const util = require('util');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const filter= (sizes,genders,breed,ages,castrated,traits) => 
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
                    breed
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

            if(castrated.length) { 
                criteria.push({
                    castrated: castrated
                })
            }
     

            if(traits.length) {    
                criteria.push({ 
                    traits: {
                        "$all": traits
                    }
                })
            }

            console.log(util.inspect(criteria, false, null));
            
            return collection.find({
                    $and: criteria
                    
            }).toArray().then((results) => {
                db.close();
                return results;
            });          
    });

    module.exports.filter = filter;