const { MongoClient } = require('mongodb');

    const getHunde = async (pages = 0, countPerPage = 8) => {

      const db =await MongoClient.connect
       (`mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`);

    const collection = db.collection('dogs');

    const usersCount = await collection.count();

    const pagesCount = Math.floor(usersCount /countPerPage);

    const hunde = await collection
      .find({})
      .skip(pages * countPerPage)
      .limit(countPerPage)
      .toArray();

    await db.close();

    return {
      pagesCount,
      hunde,

    };
};

module.exports.getHunde = getHunde;
