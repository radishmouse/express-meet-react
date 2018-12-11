const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(4000, () => {
    console.log('running on port 4000');
});