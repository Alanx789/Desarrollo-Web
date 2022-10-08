    //Importar libreria como objeto
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importar Firebase como manejador de BD
var firebase = require("firebase-admin")

var serviceAccount = require("./key.json")
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
})

//Crear base de datos
const db = firebase.firestore()
const moviesDB = db.collection('Movies')        //Crear colección (tabla)

const app = express();
const apiPort = 3003;

app.use(bodyParser.urlencoded({extended: true}))

//Que no explote la app si no tiene el puerto libre
app.use(cors());

app.use(bodyParser.json());

//Creating endpoint
app.get('/', (req, res) => {
    res.send('Hello world')
});

//CRUD
//Create, Read, Update, Delete

//Create
//Conectarnos a internet 
app.post('/create', async(req, res) => {

    try {

        //Desestructurar el body
        const { body: movie } = req
        const moviesDb = db.collection('movies')
        //const resp = moviesDB .doc({id}).set(movie)
        const { _path: {segments} } = await moviesDB.add(movie)
        const id = segments[1]
        res.send({
            status : 200,
            id,
            message: "All cool"
        })

    } catch(error){
        res.send(error)
    }
})

//Tell app to listen for new calls and sleep when none are arriving
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`) );


