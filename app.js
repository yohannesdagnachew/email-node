const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const gmail = require('./routes/gmail');


const corsOptions = {
	origin: [
		'https://lambent-maamoul-6d6af3.netlify.app/',
		'http://localhost:3000',
		'http://localhost:3001',
		'http://localhost:3002',
        'https://superb-bienenstitch-592655.netlify.app',
		undefined,
	],
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/gmail', gmail);

// port

app.listen(5000)


