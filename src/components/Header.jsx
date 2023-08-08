import React from "react";
import getTexts, { words } from "../getTexts";

const Header = (formValues, handlechange) => {
  return (
    <div>
      <span className="secondary-heading">{getTexts(words)}</span>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="title-td">6.</td>
            <td className="title-td">{getTexts(words.zero)}</td>
            <td>
              <input
                name="fio"
                required
                // value={formValues.fio}
                onChange={handlechange}
              ></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">7.</td>
            <td className="title-td">{getTexts(words.zero1)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">8.</td>
            <td className="title-td">{getTexts(words.zero2)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">9.</td>
            <td className="title-td">{getTexts(words.zero3)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">10.</td>
            <td className="title-td">{getTexts(words.zero4)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">11.</td>
            <td className="title-td">{getTexts(words.zero5)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">12.</td>
            <td className="title-td">{getTexts(words.zero6)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td rowSpan={2} className="title-td">
              13.
            </td>
            <td className="title-td">{getTexts(words.zero7)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <td className="title-td">{getTexts(words.zero8)}</td>
          <td>
            <input required></input>
          </td>
          <tr>
            <td className="title-td">14.</td>
            <td className="title-td">{getTexts(words.zero9)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">15.</td>
            <td className="title-td">{getTexts(words.zero10)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">16..</td>
            <td className="title-td">{getTexts(words.zero11)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;
