const express = require("express");
const sum = require("./sum")

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("server is listening");
})

app.get("/", (req, res) => {
    res.json({ mess: "This is home" })
})

app.get("/sum/:a/:b", async (req, res) => {
    const { a, b } = req.params;
    res.json(
        {
            ans: sum(parseInt(a), parseInt(b))
        }
    )
})