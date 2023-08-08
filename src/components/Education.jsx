import React from "react";
import getTexts, { words } from "../getTexts";

const Education = (formValues, handlechange) => {
  return (
    <div>
      <span className="secondary-heading">{getTexts(words.edu)}</span>
      <table className="table">
        <thead>
          <tr>
            <th className="title-td"> {getTexts(words.enter_date)} </th>
            <th className="title-td"> {getTexts(words.yil)} </th>
            <th className="title-td"> {getTexts(words.fakulteta)} </th>
            <th className="title-td"> {getTexts(words.klafikatsiya)} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                name="fio"
                required
                // value={formValues.fio}
                onChange={handlechange}
              ></input>
            </td>
            <td>
              <input required></input>
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
          <tr>
            <td colSpan={2} className="title-td">
              {getTexts(words.item3)}
            </td>
            <td colSpan={2}>
              <input required />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Education;
