const { CardModel } = require("../defaults");

const Card = {
    find: async (query, credentials = null) => {
        return await CardModel.find(query, credentials, { lean: true });
    },
    findOne: async (query, credentials = null) => {
        return await CardModel.findOne(query, credentials, { lean: true });
    },
    create: async (data) => {
        return await await CardModel.create(data);
    },
    update: async (id, data) => {
        await CardModel.update({ id }, { $set: data }, {upsert: true});
    },
    updateOne: async (query, data) => {
        await CardModel.updateOne(query, { $set: data }, {upsert: true});
    },
    findOneAndDelete: async (query)=> {
        await CardModel.findOneAndDelete(query)
    }


};

module.exports = Card;
