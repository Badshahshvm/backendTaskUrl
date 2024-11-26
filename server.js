const express = require("express");
const cors = require("cors")
require("dotenv").config()
const urlRoute = require("./routes/shortUrl")
const mongoose = require("mongoose");
//db connection
mongoose.connect(process.env.MONGOURI).then(() => console.log("connected")).catch((err) => console.log(err))
const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
              return res.send("<h1>Welcome to The URL shortener App</h1>")
})
//url route
app.use("/api/v1/url", urlRoute)
app.listen(process.env.PORT, () => {
              console.log("server is running")
})
