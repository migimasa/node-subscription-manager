import express from 'express';
import { join } from 'path';
import opn from 'opn';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (_, resp) => {
    resp.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
    if (err)
        console.log(err);
    else
      opn('http://localhost:' + port);
});
