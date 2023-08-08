import React from "react";
import getTexts, { words } from "../getTexts";

const Languages = (formValues, handlechange) => {
  return (
    <div>
      <span className="secondary-heading">{getTexts(words.languages)}</span>
      <p className="texts">3.1.Какими языками Вы владеете?</p>
      <table className="table">
        <thead>
          <tr>
            <th className="title-td"> {getTexts(words.til)} </th>
            <th className="title-td"> {getTexts(words.pismo)} </th>
            <th className="title-td"> {getTexts(words.chten)} </th>
            <th className="title-td"> {getTexts(words.razgovar)} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="uz">{getTexts(words.uzbek)}</label>
            </td>
            <td>
              <input
                name="fio"
                required
                formValues={formValues}
                handlechange={handlechange}
              ></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td>
              <input required />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="rus">{getTexts(words.rustili)}</label>
            </td>
            <td>
              <input required />
            </td>
            <td>
              <input required />
            </td>
            <td>
              <input required />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="angilish">{getTexts(words.angilish)}</label>
            </td>
            <td>
              <input required />
            </td>
            <td>
              <input required />
            </td>
            <td>
              <input required />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Languages;
