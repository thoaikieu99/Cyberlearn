const express = require("express");
const router = require("./routers/root.router");
const app = express();
const port = 4021;

app.use(express.json());

app.use(router);


app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`App running port http://localhost:${port}`)
})