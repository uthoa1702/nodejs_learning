const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

 const Courses = new Schema({
    name: {type: String, minLength: 1,maxLength: 10},
    image: {type: String},

    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});
 module.exports = mongoose.model('Courses', Courses);