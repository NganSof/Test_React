import { Fragment } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Contact } from "./Page/Contact/Contact";
import { Home } from "./Page/Home/Home";
import { Header } from "./Template/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product/:id" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
