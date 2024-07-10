const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {type:String},
    email: {type:String, unique:true},
    password: {type:String}
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;