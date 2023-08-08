import React, { useEffect, useState } from "react";
import getTexts, { words } from "./getTexts";
import Personal from "./components/personal";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Stapen from "./components/Stapen";
import Rabota from "./components/Rabota";
import Cloned from "./components/cloned";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  const [lang, setLang] = useState(window.localStorage.getItem("lang") || "uz");
  const handleLang = (e) => {
    window.localStorage.setItem("lang", e.target.value);
    setLang(e.target.value);
  };
  const [formValues, setFormValues] = useState({
    fio: " ",
  });
  const handlechange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target,
      value,
    });
  };

  console.log(formValues);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div>
        <div className="top-header">
          <h3 className="title">{getTexts(words.anketa_title)}</h3>
          <select onChange={handleLang} value={lang}>
            <option value={"uz"}>UZB</option>
            <option value={"ru"}>RUS</option>
          </select>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Personal
          formValues={formValues}
          handlechange={handlechange}
        ></Personal>
        <Education
          formValues={formValues}
          handlechange={handlechange}
        ></Education>
        <Languages
          formValues={formValues}
          handlechange={handlechange}
        ></Languages>
        <Stapen formValues={formValues} handlechange={handlechange}></Stapen>
        <Rabota formValues={formValues} handlechange={handlechange}></Rabota>
        <Cloned formValues={formValues} handlechange={handlechange}></Cloned>
        <Header formValues={formValues} handlechange={handlechange}></Header>
        <Section formValues={formValues} handlechange={handlechange}></Section>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
