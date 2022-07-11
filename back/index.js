const express = require("express");
const app = express();
const mongoose = require("mongoose")
require('dotenv').config()
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const authRoute = require("./routes/auth")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection Successfull"))
    .catch((err) => console.log(err))

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/auth", authRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running");
})