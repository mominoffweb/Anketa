import React from "react";
import getTexts, { words } from "../getTexts";

const Section = (formValues, handlechange) => {
  return (
    <div>
      <span className="secondary-heading ">{getTexts(words.dopolnonie)}</span>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td colSpan={2} className="title-td">
              {getTexts(words.avto)}
            </td>

            <td colSpan={3} className="title-td">
              {getTexts(words.toifasi)}
            </td>
          </tr>
          <tr>
            <td className="title-td">{getTexts(words.marka)}</td>
            <td>
              <input
                name="fio"
                required
                value={formValues.fio}
                onChange={handlechange}
              ></input>
            </td>
            <td className="title-td">{getTexts(words.harfi1)}</td>
            <td className="title-td">{getTexts(words.harfi2)}</td>
            <td className="title-td">{getTexts(words.harfi3)}</td>
          </tr>
          <tr>
            <td className="title-td">{getTexts(words.yili)}</td>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="secondary-heading">
        18. Кто на Вас может дать рекомендацию? (Ф.И.О., должность, телефон)
      </p>
      <div className="wrapper">
        <label htmlFor=""> 1) </label>
        <input className="inp" type="text" />
      </div>
      <div className="tixa">
        <label htmlFor=""> 2) </label>
        <input className="inp" type="text" />
        <p>
          Настоящим я подтверждаю достоверность предоставленной информации и не
          возражаю против проверки и обработки моих персональных данных.{" "}
        </p>
      </div>
      <div className="tixa2">
        <p>Дата заполнения</p>
        <input className="inp" type="text" />
      </div>
    </div>
  );
};

export default Section;
