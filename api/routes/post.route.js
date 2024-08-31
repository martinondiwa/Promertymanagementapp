import express from "express";

const router = express.router();

router.post("/register", (req, res)=> {
    console.log("router works!");
});

export default router;
    
