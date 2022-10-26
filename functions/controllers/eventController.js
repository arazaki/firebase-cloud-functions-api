const eventService = require("../services/eventService");

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await eventService.getAllEvents();
    res.send({ status: "OK", data: allEvents });
  } catch (error) {
    console.log("eventController.getAllEvents error", error);
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneEvent = async (req, res) => {
  const {
    params: { eventId },
  } = req;
  console.log("eventId", eventId);
  if (!eventId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':eventId' can not be empty" },
    });
    return;
  }

  try {
    const event = await eventService.getOneEvent(eventId);
    res.send({ status: "OK", data: event });
  } catch (error) {
    console.log("eventController.getOneEvent error", error);
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewEvent = async (req, res) => {
  const { body } = req;

  const newEvent = {
    title: body.title,
  };
  try {
    const createdEvent = await eventService.createNewEvent(newEvent);
    res.status(201).send({ status: "OK", data: createdEvent });
  } catch (error) {
    console.log("eventController.createNewEvent error", error);
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneEvent = async (req, res) => {
  const {
    body,
    params: { eventId },
  } = req;
  if (!eventId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':eventId' can not be empty" },
    });
    return;
  }

  try {
    const updatedEvent = await eventService.updateOneEvent(eventId, body);
    res.send({ status: "OK", data: updatedEvent });
  } catch (error) {
    console.log("eventController.updateOneEvent error", error);
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneEvent = async (req, res) => {
  const {
    params: { eventId },
  } = req;
  if (!eventId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':eventId' can not be empty" },
    });
    return;
  }

  try {
    eventService.deleteOneEvent(eventId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    console.log("eventController.deleteOneEvent error", error);
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllEvents,
  getOneEvent,
  createNewEvent,
  updateOneEvent,
  deleteOneEvent,
};
