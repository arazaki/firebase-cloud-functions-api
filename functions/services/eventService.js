const eventStore = require("../store/eventStore");

// In src/services/eventService.js
const getAllEvents = async () => {
  try {
    const allEvents = await eventStore.getAllEvents();
    return allEvents;
  } catch (error) {
    console.log("eventService.getAllEvents error", error);
    throw error;
  }
};

const getOneEvent = async (eventId) => {
  try {
    const event = await eventStore.getOneEvent(eventId);
    return event;
  } catch (error) {
    console.log("eventService.getOneEvent error", error);
    throw error;
  }
};

const createNewEvent = async (newEvent) => {
  const eventToInsert = {
    ...newEvent,
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  try {
    const createdEvent = await eventStore.createNewEvent(eventToInsert);
    return createdEvent;
  } catch (error) {
    console.log("eventService.createNewEvent error", error);
    throw error;
  }
};

const updateOneEvent = async (eventId, changes) => {
  try {
    const updatedEvent = await eventStore.updateOneEvent(eventId, {
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    });
    return updatedEvent;
  } catch (error) {
    console.log("eventService.updateOneEvent error", error);
    throw error;
  }
};

const deleteOneEvent = async (eventId) => {
  try {
    await eventStore.deleteOneEvent(eventId);
  } catch (error) {
    console.log("eventService.deleteOneEvent error", error);
    throw error;
  }
};

module.exports = {
  getAllEvents,
  getOneEvent,
  createNewEvent,
  updateOneEvent,
  deleteOneEvent,
};
