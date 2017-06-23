const { MongoClient } = require('mongodb');

    const getHunde = async (page = 0, countPerpage = 10) => {

      const db =await MongoClient.connect
       (`mongodb://dmalewski:1234@ds163711.mlab.com:63711/ifi_tierheim`);

    const collection = db.collection('dogs');

    const usersCount = await collection.count();

    const pagesCount = usersCount /countPerpage;

    const hunde = await collection
      .find({})
      .skip(page * countPerPage)
      .limit(countPerPage)
      .toArray();

    await db.close();

    return {
      pagesCount,
      hunde,

    };
};

module.exports.getHunde = getHunde;
