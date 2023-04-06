const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const gmail = require('./routes/gmail');
const mongoose = require('mongoose');


const dbUrl = 'mongodb+srv://dagnachewjohn2:Z9gsZlxa409OHjMe@cluster0.rxnhrqo.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));
    

const corsOptions = {
	origin: '*',
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/gmail', gmail);

// port

app.listen(5000)


