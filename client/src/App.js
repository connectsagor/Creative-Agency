import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import { initializeApp } from "firebase/app";
import { createContext, useContext, useState } from "react";
import ServicesList from "./components/ServicesList/ServicesList";
import Order from "./components/Order/Order";
import MyService from "./components/Order/MyService";
import Review from "./components/Order/Review";
import AddService from "./components/ServicesList/AddService";
import AddAdmin from "./components/ServicesList/AddAdmin";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [Isadmin, setIsAdmin] = useState(false);

  return (
    <UserContext.Provider
      value={[
        { user, setUser },
        { loggedIn, setLoggedIn },
        { Isadmin, setIsAdmin },
      ]}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<ServicesList />}></Route>
          <Route path="/user" element={<Order />}></Route>
          <Route path="/my-service" element={<MyService />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/add-service" element={<AddService />}></Route>
          <Route path="/make-admin" element={<AddAdmin />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
