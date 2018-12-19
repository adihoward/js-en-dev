import express from 'express';
import path  from 'path';
import chalk from  'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/*eslint-disable no-console*/

var port = 3000;
var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(chalk.green('http://localhost:' + port));
    }
})
