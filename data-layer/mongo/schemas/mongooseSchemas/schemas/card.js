const Schema = require("mongoose").Schema;
const cardProducts = require("./cardsProduct")
const card = {
    userId : {type : String, require : true, unique: true},
    id: {type: String, required: true, unique: true},
    products: [cardProducts],
    totalPrice : {type : Number, default: 0}
};

const schema = new Schema(card, {
    minimize: false,
    versionKey: false
});


module.exports = schema;