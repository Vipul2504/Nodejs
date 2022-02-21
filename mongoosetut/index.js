var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pawancart', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we are connected")
});
// const kittySchema = new mongoose.Schema({
//     name: String
// });
// const Kitten = mongoose.model('Kitten', kittySchema);
// const pawan = new Kitten({ name: 'pawan' });
// console.log(pawan.name); // 'Silence