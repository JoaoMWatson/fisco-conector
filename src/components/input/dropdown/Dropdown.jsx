import React from "react";
import tipoIntegracao from "./options";

import "./Dropdown.css";

export default function Dropdown(props) {


  const setOptions = () => {
    switch (props.options) {
      case "tipoIntegracao":
        return tipoIntegracao;
      case "matriz":
        let rogerio = props.optionsData.map((value) => {
          return [
            {
              value: value,
              label: value,
              disabled: "",
            }
          ]
        });
        return rogerio[0]
      case "filial":
        return tipoIntegracao;
      default:
        return 0;
    }
  };

  let options = setOptions();

  return (
    <div style={{ width: "50%" }}>
    {console.log(options)}
      <label className="label-format" for="cars">
        {props.labelString}
      </label>
      <select
        onChange={props.onChange}
        className="searchDropdown resetDefault"
        name={props.name}
        id={props.name}
        type="string"
      >
        <option value=''>Escolha...</option>
        {options.map((value) => {
          return (
            <option disabled={value.disabled} value={value.value}>
              {value.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
