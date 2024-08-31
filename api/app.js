import express from "express";

const app = express();

app.use("/api/test", (req, res) => {
    res.send("It works!")
})
app.use("/api/auth/register", (req, res) => {
    res.send("It works!")
})
app.use("/api/auth/login", (req, res) => {
    res.send("It works!")
})
app.use("/api/auth/logout", (req, res) => {
    res.send("It works!")
})
app.use("/api/auth/logout", (req, res) => {
    res.send("It works!")
})
app.listen(5500, () => {
    console.log("server is running!"); 'server is running!'
});