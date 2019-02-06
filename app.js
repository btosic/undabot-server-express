var express = require('express');
const cors = require('cors');
var contactRouter = require('./routes/contact');
const port = 3000;

var app = express();
app.use(express.json());
app.use(cors());
app.use('/API/contact', contactRouter);

app.listen(port, () => console.log(`Server listening on port ${port}...`))