import "./App.css";
import React, { useState } from "react";
import UserDetails from "./components/UserDetails";
import PersonalDetails from "./components/PersonalDetails";
import OtherDetails from "./components/OtherDetails";
import Success from "./components/Success";

function App() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    fullname: "",
    displayname: "",
    workspacename: "",
    workspaceurl: "",
  });

  const componentList = [
    <UserDetails
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <PersonalDetails
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <OtherDetails
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Success
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
  ];
  return (
    <div className="App">
      <h1>Eden</h1>

      <div className="body">{componentList[page]}</div>
    </div>
  );
}

export default App;
