const express = require("express")
const app = express()
const port = process.env.PORT || 3001

const mongoose = require("mongoose")

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")

app.use(require("./routes/apiRoutes"))
app.use(require("./routes/htmlRoutes"))

app.listen(port, function(){
    console.log("App is Listening on Port", port)
})