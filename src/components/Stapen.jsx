import React from "react";
import getTexts, { words } from "../getTexts";

const Stapen = (formValues, handlechange) => {
  return (
    <div>
      <span className="secondary-heading">{getTexts(words)}</span>
      <p className="texts">
        3.2. Степень владения ПК? (варианты ответов: - не знаю, - слабо, -
        средне, - хорошо, - в совершенстве)
      </p>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="title-td">{getTexts(words.word)}</td>
            <td>
              <input
                name="fio"
                required
                value={formValues.fio}
                onChange={handlechange}
              ></input>
            </td>
            <td className="title-td">{getTexts(words.program)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{getTexts(words.excel)}</td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getTexts(words.internet)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{getTexts(words.power_point)}</td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getTexts(words.web_platform)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stapen;
