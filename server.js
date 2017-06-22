var express = require('express'),
    app = express(),
    bp = require('body-parser'),
    path = require('path'),
    port = 8000;

app.use(express.static(path.join(__dirname, './client')));
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(port,function(){
    console.log(`listening on ${port}`);
});
