const express = require("express");
const cors = require("cors");
const app = express();
const PORT=8002;

const { mongoconnect } = require("./connection");
mongoconnect("mongodb://localhost:27017/AR_MUSEUM").then(()=>console.log("database connected successfully")).catch((err) => {
    console.log("Error in database connection :", err);
});


const userroutes = require("./routes/user");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("", userroutes);

app.listen(PORT, () => console.log("Server started on 8002"));
