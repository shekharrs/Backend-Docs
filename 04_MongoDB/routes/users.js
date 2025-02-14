const express = require("express");
const router = express.Router();

const User = require("../models/userModel"); // import userModel

// creation of router file
// CRDUD operations
// Read (view)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Create
router.post("/users", async (req, res) => {
  console.log("Recived POST method");
  try {
    const { name, age, weight } = req.body;
    const newUser = new User({ name, age, weight });
    await newUser.save();
    res.status(200).json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Update
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, weight } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, age, weight });

    // if the user is not updated
    if (!updatedUser) {
      res.json({
        message: "User Not Found!",
      });
    }

    // if the user is updated successfully
    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Delete
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    // if the user is not deleted
    if (!deletedUser) {
      res.json({
        message: "User Not Found!",
      });
    }

    // if the user is deleted successfully
    res.status(200).json({
      success: true,
      user: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
