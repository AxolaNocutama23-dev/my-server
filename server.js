//server
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to parse JSON
app.use(bodyParser.json());

//POST endpoint to receive data
app.post("/webhook", (req, res) => {
    try {
        const{data} = req.body;

        if (!data || typeof data !== "string"){
            return res.status(400).json({error: "Invalid data format. 'data' should be a string."});
        }
        //convert string into array of characters
        const charArray = data.split("");

        //sort the array alphabetically
        charArray.sort();

        //return Json response with sorted array
        return res.json({word: charArray});

    }
     catch (error) {
        return res.status(500).json({error: "Internal server error."});
    }
});

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});