import React from "react";
import { toast } from "react-toastify";
import "./Header.css";

export default function Header(props) {

  

  return (
    <div className="content">
      <img
        src="http://fiscosys.com.br/images/LogoFiscosysOriginal.png"
        className="logo-image"
      />
      <h2 className="conector-title">Conector</h2>
      <div className="vertical-line"></div>
      <img
        src="https://logodownload.org/wp-content/uploads/2014/05/sadia-logo-0.png"
        className="partner-image"
      />
    </div>
  );
}
