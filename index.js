const express = require("express");
const postData = require("./post-data");

const PORT = 3000;
const app = express();

// middleware to accept JSON request body.
app.use(express.json());

// Create a GET api that returns query param, path param and return both values with info as json
app.get("/:id", (req, res) => {
    const responseData = { queryParams: req.query, pathParams: req.params };
    res.json(responseData);
});

// Create a POST api which acccepts a JSON data. Return an array of data.
app.post("/", (req, res) => {
    console.log("post body =", req.body); // logging request body.
    res.json(postData);
});

// Create an express server
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});