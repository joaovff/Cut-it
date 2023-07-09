import { Box } from "@material-ui/core";
import "../Hero/hero-styles.css";
import React from "react";
import Typewriter from "./typewriter/Typewriter";

function Hero() {
  return (
    <Box className="hero-box">
      <Box className="hero-center">
        <img src="/barbershop-logo.png" className="hero-logo" />
        <Typewriter />
      </Box>
      <Box className="outside-box-footer">
        <Box className="hero-footer">
          <Box className="hero-footer-box box1">
            <h3 className="box-title box-title1">Morada</h3>
            <address className="p-box" style={{ fontStyle: "normal" }}>
              Avenida José Abelhudo, 171. <br />
              Paço De Arcos, Oeiras. 1148-204.
            </address>
          </Box>
          <Box className="hero-footer-box box2">
            <h3 className="box-title">Agendamento</h3>
            <p className="p-box">
              {" "}
              <a className="a-box" href="#">
                Clica aqui
              </a>{" "}
              para efetuar um
              <br /> agendamento online
            </p>
          </Box>
          <Box className="hero-footer-box box3">
            <h3 className="box-title">Horário</h3>
            <time
              className="p-box"
              itemprop="openingHours"
              dateTime="Mo-Fr 09:00-18:00"
            >
              Segunda a Sexta, das 09:00 às 18:00
            </time>
            <br />
            <time
              className="p-box"
              itemprop="openingHours"
              dateTime="Sa 09:00-13:00"
            >
              Sábado, das 09:00 às 13:00
            </time>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
