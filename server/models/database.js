 <<<<<<< HEAD
const mongoose = require('mongoose');
mongoose.set("strictQuery", false).connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Connected')
});

// models
require('./Category'); 
=======
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Connected')
});

// models
require('./Category');
require('./Recipe');
>>>>>>> 25d0e2b8b424a2e13f437e88ce6c1c6b384e6dfc
