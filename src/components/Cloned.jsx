import React from "react";
import getTexts, { words } from "../getTexts";

const cloned = (formValues, handlechange) => {
  return (
    <div>
      <span className="secondary-heading">{getTexts(words.clom1)}</span>
      <p className="item">
        Расставьте приоритеты от 1 до 10 (где 1 – наиболее важно, 10 – наименее
        важно). <br /> Цифры не должны повторяться.
      </p>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="title-td">{getTexts(words.section)}</td>
            <td>
              <input
                name="fio"
                required
                // value={formValues.fio}
                onChange={handlechange}
              ></input>
            </td>
            <td className="title-td">{getTexts(words.section5)}</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{getTexts(words.section1)}</td>
            <td>
              <input></input>
            </td>
            <td className="title-td">{getTexts(words.section6)}</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{getTexts(words.section2)}</td>
            <td>
              <input></input>
            </td>
            <td className="title-td">{getTexts(words.section7)}</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{getTexts(words.section3)}</td>
            <td>
              <input></input>
            </td>
            <td className="title-td">{getTexts(words.section8)}</td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{getTexts(words.section4)}</td>
            <td>
              <input></input>
            </td>
            <td className="title-td">{getTexts(words.section9)}</td>
            <td>
              <input></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default cloned;
