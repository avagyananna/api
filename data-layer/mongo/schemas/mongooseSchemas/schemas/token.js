const Schema = require("mongoose").Schema;

const token = {
    userId: { type: String, required: true },
    email : { type : String, required : true},
    bearer : { type : String, required: true},

};

const schema = new Schema(token, {
    minimize: false,
    versionKey: false
});


module.exports = schema;
