//create web server
const express = require('express');
const app = express();
const port = 3000;

//create body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//create comments array
let comments = [
    { name: "John", message: "Hello everyone!" },
    { name: "Jane", message: "Hi John!" }
];

//create a route for the comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

//create a route for the comments
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.send("Comment added successfully!");
});

//start the server
app.listen(port, () => {
    console.log("Server is running on port " + port);
});