
/* Module dependencies */

const { connBase } = require("../mongo/connections/mongo");
const {
    tokenSchema,
    userSchema,
    cardSchema,
    productSchema
} = require("./schemas/mongooseSchemas");
const { COLLECTIONS } = require("./constants");

const UsersModel = connBase.model(COLLECTIONS.USERS.name, userSchema, COLLECTIONS.USERS.collection);
const TokenModel = connBase.model(COLLECTIONS.TOKEN.name, tokenSchema, COLLECTIONS.TOKEN.collection);
const CardModel =  connBase.model(COLLECTIONS.CARD.name, cardSchema, COLLECTIONS.CARD.collection);
const ProductModel =  connBase.model(COLLECTIONS.PRODUCT.name, productSchema, COLLECTIONS.PRODUCT.collection);


module.exports = {
    UsersModel,
    TokenModel,
    CardModel,
    ProductModel
};
