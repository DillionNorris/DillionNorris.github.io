const express = require("express");
const app = express();
app.use(express.static("../part6"));//may couse problems

app.get("/", (req,res)=> {
    res.send("hello world!");
});

app.get("/api/roster", (req, res)=> {
    const roster = "./pages/roster.json";
    res.sendFile("/pages/roster.json");

});

app.listen(3000,()=> {
    console.log("listening on");
})