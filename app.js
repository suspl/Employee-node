var express = require("express");
const expressgraphql = require('express-graphql');
const graphQlSchema = require('./graphql/schemas/index');
const graphQlResolvers = require('./graphql/resolvers/index');


var app = express();
var port = 4000;
//var __dirname="E:/Node.js,Express.js,MongoDB,Mongoose ODM/node_demo";

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//---CORS enabling code on Server Side -------
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });
    
//---CORS enabling code on Server Side end-----

//----Database connection----
const server = 'localhost:27017'; //  DB SERVER
const database = 'node-demo';      //  DB NAME
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/node-demo");

mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true,useUnifiedTopology: true})
       .then(() => {
        console.log('mongodb connection successful');
         app.listen(port, () => { //----epress.js connection-----
          console.log("Server listening on port " + port);
         });

       })
       .catch(err => {
         console.log(err);
         console.error('Database connection error')
       });



//-----Database end----


app.use(
    '/graphql',
    expressgraphql({
      schema: graphQlSchema,
      rootValue: graphQlResolvers,
      graphiql: true
    })
);



//--rest api calls using express.js---

// app.get('/getReportingPersonsIDByRole/:B_title', async function(req, res) {
//    // console.log("id=="+req.userId);
//    let businessTitle = req.params.B_title;
//    let _filterquery={BusinessTitle:businessTitle,Active:"Yes"};
//    let result = await userModel.find(_filterquery);
//    return res.json(result);
//    });
     
//---api calls end-----

