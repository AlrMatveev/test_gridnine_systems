import { Box } from "@mui/material";
import styles from "./flight.module.css";
import Leg from "./leg";

function Flight({ flight }) {
  const { amount, currencyCode } = flight.price;

  const currency = {
    RUB: "₽",
    EUR: "$",
    USD: "€",
  };

  return (
    <Box className={styles.flight}>
      <Box className={styles.header}>
        <Box className={styles.logo}>LOGO {flight.legs[0].airline}</Box>
        <Box>
          <Box className={styles.price}>
            {amount} {currency[currencyCode]}
          </Box>
          <Box className={styles.price_description}>
            Стоимость одного взрослого пассажира
          </Box>
        </Box>
      </Box>
      {flight.legs.map((leg, i) => {
        return <Leg key={i} leg={leg} />;
      })}
      <Box
        className={styles.button}
        onClick={() => {
          alert(flight.flightToken);
        }}
      >
        ВЫБРАТЬ
      </Box>
    </Box>
  );
}

export default Flight;
