const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/free", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function(){
    console.log('SUCCESS');
}).on('error', function(error){
    console.log('FAILED', error);
});