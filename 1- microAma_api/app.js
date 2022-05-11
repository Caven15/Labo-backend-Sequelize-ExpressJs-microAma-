const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const db = require("./models/dbConnect")

db.connect()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    ) 
    next();
})
app.use(cors())

// ici j'importe tout mes routeur pour la redirection...


app.all("*", (req, res, next) => {
    console.log("attention route non trouvée")
    res.end()
})

app.listen(PORT, console.log("Serveur connecté"))