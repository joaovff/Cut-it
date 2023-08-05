import React from "react";
import "../Serviços/servicos-styles.css";
import { Box } from "@mui/material";
function Servicos() {
  return (
    <Box className="services-box">
      <Box className="costumer-box">
        <img src="/costumer-pic.jpg" />
      </Box>
      <Box className="price-list">
        <Box className="title-services">
          <br />
          <h1>Tabela de Preços</h1>
          <img src="/5stars.svg" />
          <h3>
            <i>Atendimento com excelência e valoroes acessíveis.</i>
          </h3>
        </Box>
        <Box className="box-out-prices">
          <Box className="price-box">
            <p>Corte simples:</p> <h3>10,00 €</h3>
          </Box>
          <Box className="price-box">
            <p>Corte de cabelo em degradê (fade):</p> <h3>15,00 €</h3>
          </Box>
          <Box className="price-box">
            <p>Corte de cabelo + Barba:</p> <h3>20,00 €</h3>
          </Box>
          <Box className="price-box">
            <p>Corte de cabelo + Barba terapia:</p> <h3>25,00 €</h3>
          </Box>
          <Box className="price-box">
            <p>Cortornos:</p> <h3>7,00 €</h3>
          </Box>
          <Box className="price-box">
            <p>Sobrancelha:</p> <h3>5,00 €</h3>
          </Box>
          <Box className="price-box">
            <p>Lavagem:</p> <h3>5,00 €</h3>
          </Box>
          <Box className="price-box">
            <p>
              Coloração <span>(a partir de):</span>
            </p>{" "}
            <h3>20,00 €</h3>
          </Box>
          <Box className="price-list-button">
            <button>
              <a>AGENDAR</a>
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Servicos;
