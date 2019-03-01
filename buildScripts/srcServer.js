import express from 'express';
import { join } from 'path';
import opn from 'opn';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (_, resp) => {
    resp.sendFile(join(__dirname, '../src/index.html'));
});

app.get('/comicBookSeries', (_, res) => {
    //Hard coding for simplicity. Pretend this hits a real database
    res.json([
        
    ]);
});

app.listen(port, (err) => {
    if (err)
        console.log(err);
    else
      opn('http://localhost:' + port);
});
