const express = require("express");
const eventController = require("../../controllers/eventController");

const router = express.Router();

router.get("/", eventController.getAllEvents);

router.get("/:eventId", eventController.getOneEvent);

router.post("/", eventController.createNewEvent);

router.patch("/:eventId", eventController.updateOneEvent);

router.delete("/:eventId", eventController.deleteOneEvent);

module.exports = router;
