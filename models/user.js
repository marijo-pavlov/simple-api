var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/simple-api");

var UserSchema = new Schema({
	name: {
		type: String
	}
});

module.exports = mongoose.model('User', UserSchema);