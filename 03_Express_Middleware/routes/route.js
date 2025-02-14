const express = require('express');
const router = express.Router();

// Middleware
// Auth middleware
const auth = (req, res, next) => {
    console.log("Auth Middleware");

    // created a dummy user data (for understanding purpose)
    req.user = {userId: 1, role: "student"};

    // if a req is valid then it will move to the next
    if(req.user){
        next();
    } else{
        req.json({
            success: false,
            message: "Not a Valid User",
        })
    }
}

// Student middleware
const isStudent = (req, res, next) => {
    console.log("Student Middleware");

    if(req.user.role === "student"){
        next();
    } else{
        req.json({
            success: false,
            message: "Access Denied, this route only for student",
        })
    }
}

// Admin middleware
const isAdmin = (req, res, next) => {
    console.log("Admin Middleware");

    if(req.user.role === "admin"){
        next();
    } else{
        req.json({
            success: false,
            message: "Access Denied, this route only for admin",
        })
    }
}

// Router
//Route-specific middleware 
router.get('/student', auth, isStudent, (req, res) => {
    console.log("Student Specific Route");
    res.send("This Page is only for Student");
});

// Route-specific middleware 
router.get('/admin', auth, isAdmin, (req, res) => {
    console.log("Adming Specific Route");
    res.send("This page is only for Admin");
})

module.exports = router;