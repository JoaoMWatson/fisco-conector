import React from "react";
import { CSVLink } from "react-csv";
import Button from "../input/button/Button";
import axios from "axios";
import api from "../../api";

import "./Grid.css";

export default function Grid(props) {
  const csvData = [
    { Dados: props.Dados },
    { Descriptionretorno: props.Descriptionretorno },
    { Operationretorno: props.Operationretorno },
    { Json: props.Json },
  ];

  const headers = [
    { label: "Dados", key: "Dados" },
    { label: "Descriptionretorno", key: "Descriptionretorno" },
    { label: "Operationretorno", key: "Operationretorno" },
    { label: "Json", key: "Json" },
  ];

  const res = () =>{
    try{
      axios.get(api+'Suporte/GetDeleteRetornoJson')
      alert('retorno deletado')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <table class="rogerio table">
        <thead class="table-header">
          <th>ID</th>
          <th>Data/Hora</th>
          <th>Dados</th>
          <th>Descrição</th>
          <th>Retorno da Operação</th>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>{props.Id}</td>
            <td>{props.Datahoraintegracao}</td>
            <td>{props.Dados}</td>
            <td>{props.Descriptionretorno}</td>
            <td>{props.Operationretorno}</td>
          </tr>
        </tbody>
      </table>
      <div className="buttons-group">
        <CSVLink
          data={csvData}
          headers={headers}
          filename={"relacao-erros-integracao"}
        >
          <Button
            type="button"
            label="Exportar"
            color="primary"
          />
        </CSVLink>
        <Button type="button" label="Limpar" color="secondary" onClick={() => res()}/>
      </div>
    </>
  );
}
