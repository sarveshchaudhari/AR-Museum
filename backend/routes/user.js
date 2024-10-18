const express = require("express");
const router = express.Router();
const { handleUserSigninPost, handleUserLoginPost, handleUserSchedulePost, handleViewBooking } = require("../controllers/user");

router.post("/signin", handleUserSigninPost);
router.post("/login", handleUserLoginPost);

router.post("/book", handleUserSchedulePost);
router.get("/viewbooking", handleViewBooking);

module.exports = router;