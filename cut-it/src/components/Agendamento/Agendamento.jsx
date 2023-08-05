import { Box } from "@mui/material";
import "../Agendamento/agendamento-styles.css";

function Agendamento() {
  return (
    <Box className="agendamento-box">
      <Box className="slogan-agendamento">
        <Box className="inside-slogan">
          <h3>
            Agendamento <br />
            Online
          </h3>
          <Box>
            <img src="/5stars.svg" />
          </Box>
          <p>Agende a qualquer momento, de onde estiver.</p>
          <p className="p-link">
            Através do link abaixo terá acesso imediato a todos os nossos
            horários e serviços. Descubra como o agendamento online é prático!
          </p>
          <Box>
            <button className="agendar-button">
              <a href="#">AGENDAR</a>
            </button>
          </Box>
        </Box>
      </Box>
      <Box className="mockup">
        <img src="/mockup.png" />
      </Box>
    </Box>
  );
}

export default Agendamento;
