const { ProductModel } = require("../defaults");

const Product = {
    find: async (query, credentials = null, skip=0, limit=10) => {
        return await ProductModel.find(query, credentials, { lean: true, skip, limit });
    },
    findOne: async (query, credentials = null) => {
        return await ProductModel.findOne(query, credentials, { lean: true });
    },
    create: async (data) => {
        return await await ProductModel.create(data);
    },
    update: async (id, data) => {
        await ProductModel.update({ id }, { $set: data }, {upsert: true});
    },
    findOneAndDelete: async (query)=> {
        await ProductModel.findOneAndDelete(query)
    }


};

module.exports = Product;
