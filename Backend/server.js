// backend/app.js
const express = require("express");
const skillRoutes = require("./routes/skillRoutes");
const cors = require("cors");
const port = 3000;
const app = express();
app.use(cors());




app.use(express.json());

// Routes
app.use("/api/skills", skillRoutes);





app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
