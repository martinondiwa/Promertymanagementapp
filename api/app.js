import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
const app = express();

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);

app.listen(5500, () => {
    console.log("server is running!"); 'server is running!'
});