import React from "react";
import getTexts, { words } from "../getTexts";

const Personal = ({ formValues, handlechange }) => {
  return (
    <div>
      <span className="secondary-heading">
        {getTexts(words.personal)}
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td colSpan={2} className="title-td">
                {getTexts(words.fio)}
              </td>
              <td colSpan={2}>
                <input
                  name="fio"
                  required
                  // value={formValues.fio}
                  onChange={handlechange}
                ></input>
              </td>
            </tr>
            <tr>
              <td className="title-td">{getTexts(words.date_of_bithr)}</td>
              <td>
                <input required></input>
              </td>
              <td className="title-td">{getTexts(words.place_of_birth)}</td>
              <td>
                <input required></input>
              </td>
            </tr>
            <tr>
              <td className="title-td">{getTexts(words.item1)}</td>
              <td>
                <input required></input>
              </td>
              <td className="title-td">{getTexts(words.item2)}</td>
              <td>
                <input required></input>
              </td>
            </tr>
            <tr>
              <td className="title-td">{getTexts(words.kontakt_tel)}</td>
              <td>
                <label htmlFor="dom">{getTexts(words.home_tel)}</label>
                <input id="dom"></input>
              </td>
              <td>
                <label htmlFor="cell">{getTexts(words.cell_tel)}</label>
                <input id="cell"></input>
              </td>
              <td>
                <label htmlFor="work">{getTexts(words.work_tel)}</label>
                <input id="work"></input>
              </td>
            </tr>
            <tr>
              <td className="title-td">{getTexts(words.email)}</td>
              <td>
                <input required type="email" />
              </td>
              <td className="title-td">{getTexts(words.contakt)}</td>
              <td>
                <input required></input>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="title-td">
                {getTexts(words.info1)}
              </td>
              <td colSpan={2}>
                <input required></input>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="title-td">
                {getTexts(words.info2)}
              </td>
              <td colSpan={2}>
                <input required></input>
              </td>
            </tr>
          </tbody>
        </table>
      </span>
    </div>
  );
};

export default Personal;
