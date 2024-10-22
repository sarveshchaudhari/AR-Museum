const { User } = require("../models/user");
const { Booking } = require("../models/booking");
const { response } = require("express");

let temp;
const handleUserSigninPost = async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        await User.create(body);
        temp = await User.findOne({ email: body.email });
        return res.json({ message: "Success" });
    } catch (err) {
        return res.json({ message: "User already exists" });
    }
};

const handleUserLoginPost = async (req, res) => {
    const body = req.body;
    const response = await User.findOne({ email: body.email, password: body.password });
    if (response === null) {
        return res.json({ message: "Enter valid credentials" });
    } else {
        temp = response;
        return res.json({ message: "Success" });
    }
};

const handleUserSchedulePost = async (req, res) => {
    const { date, time } = req.body;
    const currentDate = new Date(); 

    try {
        const existingBooking = await Booking.findOne({ date, time, u_id: temp._id });
        if (existingBooking) {
            return res.json({ message: "Failed" });
        }

        const bookingDateTime = new Date(`${date}T${time}`);
        if (bookingDateTime < currentDate) {
            return res.json({ message: "Failed" });
        }

        await Booking.create({ ...req.body, u_id: temp._id });
        return res.json({ message: "Success" });
    } catch (err) {
        console.error("Error creating booking:", err);
        return res.json({ message: "Failed" });
    }
};


const handleViewBooking = async (req, res) => {
    try {
        const currentDate = new Date(); 

        const response = await Booking.find({ u_id: temp._id });

        if (!response || response.length === 0) {
            return res.json({ message: "Failed" });
        }

        const validBookings = response.filter(booking => {
            const bookingDateTime = new Date(`${booking.date.toISOString().split('T')[0]}T${booking.time}`);
            return bookingDateTime >= currentDate; 
        });

        if (validBookings.length === 0) {
            return res.json({ message: "Failed" });
        }

        const combinedResponse = validBookings.map(booking => ({
            ...booking.toObject(),
            name: temp.name
        }));

        return res.json(combinedResponse);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    handleUserSigninPost,
    handleUserLoginPost,
    handleUserSchedulePost,
    handleViewBooking,
}