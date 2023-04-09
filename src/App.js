import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditContact from "./components/EditContact";
import ContactDetail from "./components/ContactDetail";
import { ContactCrudContextProvider } from "./context/ContactCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactCrudContextProvider>
          <Routes>
            <Route path="/add" element={<AddContact />} />
            <Route path="/" exact element={<ContactList />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="/edit" element={<EditContact />} />
          </Routes>
        </ContactCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
