const { MongoClient } = require('mongodb');

const moment = require('moment');

const CONNECTION_STRING = `mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`;

const insertDog = (id,institution,name,img,height,birthdate,since_when,breed,colour,gender,traits,castrated, link, text, user_id) => {
    return MongoClient
      .connect(CONNECTION_STRING)
      .then((db) => {
            const collection = db.collection('dogs');

            //Größe matchen
            let height_matched = height.match(/\d{2}/ig);

            if(parseInt(height_matched) <= 30) {
                height_matched = "Klein";
            }
            else if(parseInt(height_matched) <= 59) {
                height_matched = "Mittel";
            }
            else if(parseInt(height_matched) >= 60){
                height_matched = "Groß";
            }


            //Geburtsdatum in jung/erwachsen/senior umrechnen
            const today = moment();

            const years = moment().diff(moment(birthdate, "DD-MM-YYYY"), 'years');

            const months = moment().diff(moment(birthdate, "DD-MM-YYYY"), 'months');

            let age_new;

            if(years >= 1) {
                age_new = years + " Jahre";
            }
            else if(months < 12) {
                age_new = months + " Monate";
            }

            if(height_matched == "Groß") {
                if(years > 5) {
                    age_new ="senior";
                } 
            }
            else if(height_matched == "Mittel") {
                if(years > 7) {
                    age_new ="senior";
                } 
            }
            else if(height_matched == "Klein") {
                if(years > 9) {
                    age_new ="senior";
                } 
            }

            if(age_new.match(/Monate/ig) || (age_new.match(/Jahre/ig) && years <= 1)) {
                age_new ="jung";
            }
            else if(age_new.match(/Jahre/ig) && years > 1) {
                age_new ="erwachsen";
            }

            
            const document = {
                id,
                institution,
                name,
                img,
                breed,
                colour,
                gender,
                castrated,
                birthdate,
                age: age_new,
                height: height_matched,
                since_when,
                traits,
                how_inserted: "handwritten",
                link, 
                text,
                user_id
            };

        return collection
                .insertOne(document)
                .then(() =>
                    db.close()
                );
        })
        .then(() =>
            id,
            name
        );
};


const persistPhoto = (filename, type, size, dog_id) => {
    return MongoClient
        .connect(CONNECTION_STRING)
        .then((db) => {
            const collection = db.collection('photos');

            const document = {
                filename,
                type,
                size,
                uploadedAt: new Date().toISOString(),
                dog_id
            };

            return collection
                .insertOne(document)
                .then(() => {
                    db.close();
                }) 

        })
        .then(() =>
            filename
        );
};

module.exports.persistPhoto = persistPhoto;

module.exports.insertDog = insertDog;