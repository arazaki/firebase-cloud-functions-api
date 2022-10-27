import { useRef, useState } from "react";
import FirebaseAuthService from "./fb/FirebaseAuthService";
import FirebaseFirestoreRestService from "./fb/FirebaseFirestoreRestService";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);
  const inputRef = useRef();

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  const handleLoginWithGoogle = async () => {
    try {
      const response = await FirebaseAuthService.loginWithGoogle();
      setInfo(response);
    } catch (error) {
      console.error("handleLoginWithGoogle error", error);
    }
  };

  function handleLogout() {
    FirebaseAuthService.logoutUser();
  }

  const handleGetEvents = async () => {
    try {
      const response = await FirebaseFirestoreRestService.readDocuments({
        collection: "events",
        queries: [],
      });
      setInfo(response);
      console.log("response handleGetEvents", response);
    } catch (error) {
      console.error("handleGetEvents error", error);
    }
  };

  const handleGetOneEvent = async () => {
    try {
      if (!inputRef.current.value) {
        alert("Você deve informar um ID para executar essa chamada.");
        return;
      }
      const response = await FirebaseFirestoreRestService.readDocument(
        "events",
        inputRef.current.value
      );
      setInfo(response);
      console.log("response handleGetOneEvent", response);
    } catch (error) {
      console.error("handleGetOneEvent error", error);
    }
  };

  const handleCreateEvent = async () => {
    try {
      const randInt = Math.floor(Math.random() * 1000);
      const response = await FirebaseFirestoreRestService.createDocument(
        "events",
        {
          title: `Evento - ${randInt}`,
        }
      );
      setInfo(response);
      console.log("response handleCreateEvent", response);
    } catch (error) {
      console.error("handleCreateEvent error", error);
    }
  };

  const handleUpdateEvent = async () => {
    try {
      if (!inputRef.current.value) {
        alert("Você deve informar um ID para executar essa chamada.");
        return;
      }
      const response = await FirebaseFirestoreRestService.updateDocument(
        "events",
        inputRef.current.value,
        {
          title: "Updated Event",
        }
      );
      setInfo(response);
      console.log("response handleUpdateEvent", response);
    } catch (error) {
      console.error("handleUpdateEvent error", error);
    }
  };

  const handleDeleteEvent = async () => {
    try {
      if (!inputRef.current.value) {
        alert("Você deve informar um ID para executar essa chamada.");
        return;
      }
      const response = await FirebaseFirestoreRestService.deleteDocument(
        "events",
        inputRef.current.value
      );
      setInfo(response);
      console.log("response handleDeleteEvent", response);
    } catch (error) {
      console.error("handleDeleteEvent error", error);
    }
  };
  return (
    <div className="App">
      <h1>API boilerplate!</h1>
      <header>
        {user ? (
          <>
            <label>
              Email: <span>{user.email}</span>
            </label>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button type="button" onClick={handleLoginWithGoogle}>
            Login with Google
          </button>
        )}
      </header>
      <div className="Line">
        <button type="button" onClick={handleGetEvents}>
          Get Events
        </button>
        <button type="button" onClick={handleCreateEvent}>
          Criar Evento
        </button>
      </div>
      <div className="Line">
        <label>
          ID:
          <input ref={inputRef} type="text" placeholder="Inform the event ID" />
        </label>
        <button type="button" onClick={handleGetOneEvent}>
          Get One Event
        </button>

        <button type="button" onClick={handleUpdateEvent}>
          Atualizar Evento
        </button>
        <button type="button" onClick={handleDeleteEvent}>
          Apagar Evento
        </button>
      </div>
      <div className="Json">
        <h3>Response</h3>
        <pre>{info && JSON.stringify(info, undefined, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
