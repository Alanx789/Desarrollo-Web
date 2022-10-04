    //Importar libreria como objeto
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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

//Tell app to listen for new calls and sleep when none are arriving
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`) );


