import * as express from "express";
let app = express();
app.get('/', function (req, res) {
    console.log()
    if (typeof req.body["q1"]!="undefined"){
        res.send('Hello World')
    }
});
console.log("listening to 3000");
app.listen(3000)