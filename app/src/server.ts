import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import {save,loan} from "./scoring";
let app = express();
let jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(jsonParser);
app.post('/endpoint', function (req, res) {
    let j = req;
    let score =0;
    if (typeof req.body !="undefined"){
        if (typeof req.body["q1"]!="undefined"){
            score =save(score,req.body.q1);
        }
        if (typeof req.body["q2"]!="undefined"){
            score = loan(score,req.body.q2);
        }
        let to_send ={"score":score};
        console.log("to_Send",to_send);
        return res.send(to_send);
    }
});

app.use('/',express.static(path.join(__dirname,"..","..","public","dist")))
console.log("listening to 3000");
app.listen(3000)