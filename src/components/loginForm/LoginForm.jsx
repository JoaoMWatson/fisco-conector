import React, { useState } from "react";
import axios from "axios";
import api from "../../api";
import Button from "../input/button/Button";

import "./LoginForm.css";

export default function LoginForm(props) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  async function res(usuario, senha, e) {
    if (usuario.length == 0 || senha.length == 0) {
      alert("usuario ou senha vazios");
    } else {
      const resp = await axios
        .get(api + `Suporte/GetUsuarioSenha?usuario=${usuario}&senha=${senha}`)
        .then(await props.setCallbackAuth(resp.data));
    }
  }

  return (
    <>
      <img
        className="image"
        src="http://fiscosys.com.br/images/LogoFiscosysOriginal.png"
      />
      <form action="" className="LoginForm">
        <label className="label-login" for="usuario">
          Usuario
        </label>
        <input
          onChange={(e) => setUsuario(e.target.value)}
          id="usuario"
          type="text"
          name="usuario"
          class="login-input"
        ></input>

        <label className="label-login" for="senha">
          Senha
        </label>
        <input
          onChange={(e) => setSenha(e.target.value)}
          id="senha"
          type="password"
          name="senha"
          class="login-input"
        ></input>
        <div className="button-container">
          <Button
            onClick={() => res(usuario, senha)}
            type="button"
            label="Entrar"
            color="primary"
          />
        </div>
      </form>
    </>
  );
}
