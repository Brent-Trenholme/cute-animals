import express from "express";
import fs from "fs";

const db = JSON.parse(fs.readFileSync("./videos.json", "utf-8"));

const app = express();
app.use(express.static("./css"));
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render('index', {ids: db});
});
app.listen(process.env.PORT || 8080);