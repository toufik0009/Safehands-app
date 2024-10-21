const express = require("express");
const ContactRoute = require("./routes/ContactRoute");
const UserRoute = require("./routes/UserRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 

app.get('/',(req,res)=>{
    res.send("Hello")
})

// Routes
app.use("/api", ContactRoute);
app.use("/api", UserRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
