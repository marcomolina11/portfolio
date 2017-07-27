// STANDARD EXPRESS SETUP
var express     = require('express'),
    path        = require('path'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    app         = express(),
    port        = process.env.PORT || 8000;

process.env['APPROOT'] = __dirname;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env['APPROOT'], './client/static')));
app.use(express.static(path.join(process.env['APPROOT'], './bower_components')));
app.set("views", path.join(process.env['APPROOT'], "./client/views"));
app.set("view engine", "ejs");

// DATABASE
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));

// ROUTES 
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

app.listen(port, function(){
	console.log(`server running on port ${ port }`);
});