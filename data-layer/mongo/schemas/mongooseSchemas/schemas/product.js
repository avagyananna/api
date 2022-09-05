const Schema = require("mongoose").Schema;

const product = {
    id: {type: String, required: true},
    name: { type: String, required: true },
    price : { type : Number, required : true},
    description : { type : String, required: true},
    image: {type: String},
    type: {type: String, required: true}
};

const schema = new Schema(product, {
    minimize: false,
    versionKey: false
});

// schema.createIndex( { name: "text", description: "text" } );

module.exports = schema;