const { type } = require("wd/lib/commands");

const Schema = require("mongoose").Schema;

const cardProducts = {
    id: {type: String, required: true},
    name: { type: String, required: true },
    price : { type : Number, required : true},
    image: {type: String},
    type: {type: String, required: true},
    count: {type: Number, default: 0}
};

const schema = new Schema(cardProducts, {
    minimize: false,
    versionKey: false
});


module.exports = schema;