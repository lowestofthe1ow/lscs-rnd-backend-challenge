import bodyParser from 'body-parser';
import express from 'express';
import router from './src/routes/router.js';
import dbcon from './src/model/dbcon.js';

const app = express();
const PORT = 5000

app.set('dbcon', dbcon);

app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
