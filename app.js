const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const gmail = require('./routes/gmail');


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


