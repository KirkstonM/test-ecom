const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
                                           firstName : {
                                               type: String,
                                               required : true
                                           },
                                           lastName : {
                                               type : String,
                                               required : true
                                           },
                                           email : {
                                               type : String,
                                               required : true,
                                           },
                                           password : {
                                               type: String,
                                               required: true
                                           }
                                       },
                                       { timestamps : true }
);


const authenticationSchema = mongoose.model("auth", authSchema);
module.exports = authenticationSchema;