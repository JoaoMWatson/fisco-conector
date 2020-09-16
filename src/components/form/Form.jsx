import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api";

import Input from "../input/Input";
import Button from "../input/button/Button";
import Dropdown from "../input/dropdown/Dropdown";
import "./Form.css";

export default function Form() {
  const [filialData, setFilialData] = useState([]);
  const [matrizData, setMatrizData] = useState();
  const [matriz, setMatriz] = useState("");
  const [filial, setFilial] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [tipoIntegracao, setTipoIntegracao] = useState("");
  const [numeroFiscal, setNumeroFiscal] = useState("");

  useEffect(() => {
    async function onChangeMatriz() {
      let resp = await axios.get(api + "Suporte/GetFilial?Matriz="+matriz);
      setFilialData(...resp.data);
    }
    onChangeMatriz();
  }, [matriz]);

  useEffect(() => {
    async function load() {
      let resp = await axios.get(api + "Suporte/GetEmpresa");
      setMatrizData(...resp.data);
    }
    load();
  }, []);

  const res = (
    matriz,
    filial,
    dataInicial,
    dataFinal,
    tipoIntegracao,
    numeroFiscal
  ) => {
    if (
      matriz === "" ||
      filial === "" ||
      dataInicial === "" ||
      dataFinal === "" ||
      tipoIntegracao === ""
    ) {
      alert("Algum campo não preenchido");
    } else {
      var url =
        tipoIntegracao +
        "?matriz=" +
        matriz +
        "&filial=" +
        filial +
        "&dtinicial=" +
        dataInicial +
        "&dtfinal=" +
        dataFinal +
        "&numeronf=" +
        numeroFiscal;

      try {
        axios.get(api + url);
        const respRetorno = axios.get(api + "Suporte/GetRetornoJson");
        alert("deu certo");
      } catch (error) {
        console.log("Outro erro: ", error);
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <form action="" className="form-content">
          <Dropdown
            onChange={(e) => setMatriz(e.target.value)}
            name="matriz"
            labelString="Matriz"
            options="matriz"
            optionsData={[matrizData]}
          />
          <Dropdown
            onChange={(e) => setFilial(e.target.value)}
            name="filial"
            labelString="Filial"
            options="filial"
            optionsData={[filialData]}
          />

          <Input
            onChange={(e) => setDataInicial(e.target.value)}
            nameTag="data-inicial"
            labelString="Data Inicial"
            type="date"
          />

          <Input
            onChange={(e) => setDataFinal(e.target.value)}
            nameTag="data-final"
            labelString="Data Final"
            type="date"
          />

          <Dropdown
            onChange={(e) => setTipoIntegracao(e.target.value)}
            name="tipoIntegracao"
            labelString="Tipo de Integração"
            options="tipoIntegracao"
          />

          <Input
            onChange={(e) => setNumeroFiscal(e.target.value)}
            nameTag="numero-doc-fiscal"
            labelString="Numero Doc Fiscal"
            type="text"
          />

          <Button
            onClick={() =>
              res(
                matriz,
                filial,
                dataInicial,
                dataFinal,
                tipoIntegracao,
                numeroFiscal
              )
            }
            label="Integrar"
            color="primary"
            type="button"
          />
          <Button type="reset" label="Limpar" color="secondary" />
        </form>
      </div>
    </>
  );
}
