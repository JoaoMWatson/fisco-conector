import React, { useEffect, useState } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import CheckIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";
import { CSVLink } from "react-csv";
import Button from "../input/button/Button";
import axios from "axios";
import api from "../../api";

import "./Grid.css";

export default function Grid(props) {
  let callBackJsonInstance =
    props.callbackJson.data === undefined ? "" : props.callbackJson.data;

  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    async function creatCsv() {
      setCsvData(callBackJsonInstance);
    }
    creatCsv();
  }, [callBackJsonInstance]);

  function jsonDownloader(json) {
    if (json != null) {
      return (
        <CSVLink data={json} filename={"retorno_json.json"}>
          <button type="button" className="button-jsonDownload">
            <GetAppIcon color="primary" />
          </button>
        </CSVLink>
      );
    } else {
      return (
        <button type="button" className="button-jsonDownload">
          <GetAppIcon color="secondary" />
        </button>
      );
    }
  }

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
      <table class="rogerio table">
        <thead class="table-header">
          <th>Json</th>
          <th>Data/Hora</th>
          <th>Dados</th>
          <th>Descrição</th>
          <th>Status</th>
        </thead>
        <tbody className="table-body">
          {callBackJsonInstance === ""
            ? ""
            : callBackJsonInstance.map((value) => {
                return (
                  <tr>
                    <td>{jsonDownloader(value.Json)}</td>
                    <td>{value === "" ? "" : value.Datahoraintegracao}</td>
                    <td>{value === "" ? "" : value.Dados}</td>
                    <td className="description-td">
                      {value === "" ? "" : value.Descriptionretorno}
                    </td>
                    <td>
                      {value.Operationretorno === null ? (
                        <CheckIcon style={{ color: "green[500]" }}/>
                      ) : (
                        <ErrorIcon color="secondary" />
                      )}
                    </td>
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
