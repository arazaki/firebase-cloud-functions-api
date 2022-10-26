/* eslint-disable no-throw-literal */
const FirebaseConfig = require("../FirebaseConfig");

const firestore = FirebaseConfig.firestore;

const getAllEvents = async () => {
  let collectionRef = firestore.collection("events");
  try {
    const firestoreResponse = await collectionRef.get();

    const fetchedEvents = firestoreResponse.docs.map((event) => {
      const id = event.id;
      const data = event.data();

      return { ...data, id };
    });

    return fetchedEvents;
  } catch (error) {
    console.log("eventStore.getAllEvents error", error);
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getOneEvent = async (eventId) => {
  try {
    if (!eventId) {
    }
    const eventRef = firestore.collection("events").doc(eventId);
    const doc = await eventRef.get();

    if (!doc.exists) {
      throw {
        status: 400,
        message: `Can't find event with the id '${eventId}'`,
      };
    }
    console.log("doc", doc);
    const id = doc.id;
    const data = doc.data();

    return {
      ...data,
      id,
    };
  } catch (error) {
    console.log("eventStore.getOneEvent error", error);
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewEvent = async (newEvent) => {
  try {
    const firestoreResponse = await firestore
      .collection("events")
      .add(newEvent);

    const eventId = firestoreResponse.id;

    return { ...newEvent, id: eventId };
  } catch (error) {
    console.log("eventStore.createNewEvent error", error);
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

// TODO test when ID does't exist. What is the error output?
const updateOneEvent = async (eventId, changes) => {
  try {
    const eventRef = firestore.collection("events").doc(eventId);
    await eventRef.update(changes);
    return { id: eventId };
  } catch (error) {
    console.log("eventStore.updateOneEvent error", error);
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneEvent = async (eventId) => {
  try {
    const eventRef = firestore.collection("events").doc(eventId);
    await eventRef.delete();
    return;
  } catch (error) {
    console.log("eventStore.deleteOneEvent error", error);
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllEvents,
  getOneEvent,
  createNewEvent,
  updateOneEvent,
  deleteOneEvent,
};
