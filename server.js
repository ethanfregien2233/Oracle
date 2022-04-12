const express = require("express");
const routes = require('./controllers');
//const sequelize

// set app and port
const app = express();
const PORT = process.env.PORT || 3000;

//set rendering eng
app.set('view engine', 'ejs')

//middleware here
//set public to static
app.use(express.static(__dirname + '/public'));
//allows express to handle json data
app.use(express.json());

//routes
app.use(routes);




app.listen(PORT, ()=> console.log(`Now listening on ${PORT}`));
