const { MongoClient } = require('mongodb');

const {findPhoto} = require('../findPhoto');

const getHunde = async (pages = 0, countPerPage = 12) => {

const db =await MongoClient.connect(`mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`);

const collection = db.collection('dogs');

const dogsCount = await collection.count();

console.log("Anzahl Hunde:" + dogsCount);

const pagesCount = Math.ceil(dogsCount / countPerPage);

const currentPage = 0; 

const hunde = await collection
  .find({})
  .skip(pages * countPerPage)
  .limit(countPerPage)
  .toArray();

  // const dogs = collection.find({}).toArray();

  // console.log(dogs.length);

  // for(let i = 0; i < dogsCount; i++) {
  //   console.log(dogs[i].name);
  //   if(dogs[i].how_inserted.match(/by hand/ig)) {
  //     findPhoto(dogs[i].id)
  //       .then((photo) => {
            await db.close();

            return {
              pagesCount,
              hunde,
              // photo
            };
  //       })   
  //   }   
  // }


};

module.exports.getHunde = getHunde;
