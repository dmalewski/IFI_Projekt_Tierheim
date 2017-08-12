const { MongoClient } = require('mongodb');

    const getHundeSearch = async (pages = 0, countPerPage = 8) => {

      const db =await MongoClient.connect
       (`mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`);

    const collection = db.collection('dogs');

    const usersCount = await collection.count();

    console.log("Anzahl Hunde:" + usersCount);

    const pagesCount = Math.ceil(usersCount / countPerPage);

    const currentPage = 0; 

    const hunde = await collection
      .find({})
      .skip(pages * countPerPage)
      .limit(countPerPage)
      .toArray();

    await db.close();

    return {
      pagesCount,
      hunde
    };
};

module.exports.getHundeSearch = getHundeSearch;
