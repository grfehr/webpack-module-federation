const express = require('express');
const path = require('path')
const fs = require('fs');

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('*', function (req, res) {
    const pathToFileName = path.resolve(__dirname, '../dist/dashboard.html');
    const contnetFromHtmlFile = fs.readFileSync(pathToFileName, 'utf-8');
    res.send(contnetFromHtmlFile);
});

app.listen(9000, function() {
    console.log('Application is running on http://localhost:9000');
});
