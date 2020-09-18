import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import Button from "../input/button/Button";
import axios from "axios";
import api from "../../api";

import "./Grid.css";

export default function Grid(props) {
  let callBackJsonInstance =
    props.callbackJson.data === undefined ? "" : props.callbackJson.data;

  const [csvData, setCsvData] = useState([])

  useEffect(() => {
    async function creatCsv() {
      setCsvData(callBackJsonInstance)
    }
    creatCsv();
  }, [callBackJsonInstance]);



  const headers = [
    { label: "Dados", key: "Dados" },
    { label: "Descriptionretorno", key: "Descriptionretorno" },
    { label: "Operationretorno", key: "Operationretorno" },
    { label: "Json", key: "Json" },
  ];

  const res = () => {
    try {
      axios.get(api + "Suporte/GetDeleteRetornoJson");
      alert("retorno deletado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {console.log(callBackJsonInstance)}
      <table class="rogerio table">
        <thead class="table-header">
          <th>ID</th>
          <th>Data/Hora</th>
          <th>Dados</th>
          <th>Descrição</th>
          <th>Retorno da Operação</th>
        </thead>
        <tbody className="table-body">
          {callBackJsonInstance === ""
            ? ""
            : callBackJsonInstance.map((value) => {
                return (
                  <tr>
                    <td>{value === "" ? "" : value.Id}</td>
                    <td>{value === "" ? "" : value.Datahoraintegracao}</td>
                    <td>{value === "" ? "" : value.Dados}</td>
                    <td>{value === "" ? "" : value.Descriptionretorno}</td>
                    <td>{value === "" ? "" : value.Operationretorno}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <div className="buttons-group">
        <CSVLink
          data={csvData}
          headers={headers}
          filename={"relacao-erros-integracao.csv"}
        >
          <Button type="button" label="Exportar" color="primary" />
        </CSVLink>
        <Button
          type="button"
          label="Limpar"
          color="secondary"
          onClick={() => res()}
        />
      </div>
    </>
  );
}
