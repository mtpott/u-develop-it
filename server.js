const apiRoutes = require('./routes/apiRoutes');

const express = require('express');
const { result } = require('lodash');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use apiRoutes
app.use('/api', apiRoutes);

//default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});


db.connect(err => {
    if(err) throw err;
    console.log('database connected.');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
