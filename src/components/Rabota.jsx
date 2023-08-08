import React from "react";
import getTexts, { words } from "../getTexts";

const Rabota = (formValues, handlechange) => {
  return (
    <div>
      <span className="secondary-heading">{getTexts(words.job)}</span>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td colSpan={2} className="title-td">
              {getTexts(words.god)}
            </td>
            <td className="title-td">{getTexts(words.kompany)}</td>
            <td>
              <input
                name="fio"
                required
                value={formValues.fio}
                onChange={handlechange}
              ></input>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td className="title-td">{getTexts(words.postuplene)}</td>
            <td className="title-td">{getTexts(words.uvolnenia)}</td>
            <td className="title-td">{getTexts(words.icon1)}</td>
            <td>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getTexts(words.icon2)}</td>
            <td className="title-td">{getTexts(words.icon6)}</td>
          </tr>

          <tr>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getTexts(words.icon3)}</td>
            <td>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getTexts(words.icon4)}</td>
            <td>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getTexts(words.icon5)}</td>
            <td>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td colSpan={3} className="title-td">
              {getTexts(words.component)}
            </td>
            <td>
              <input required></input>
              <input required></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rabota;
