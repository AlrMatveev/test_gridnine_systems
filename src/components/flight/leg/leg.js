import { Box } from "@mui/material";
import styles from "./leg.module.css";

function Leg({ leg }) {
  return (
    <Box>
      <Box>
        {leg.departureCity && leg.departureCity.caption},{" "}
        {leg.departureAirport.caption}
        <span className={styles.airport_uid}>
          {" "}
          ({leg.departureAirport.uid})
        </span>{" "}
        {"-> "}
        {leg.arrivalCity && leg.arrivalCity.caption},{" "}
        {leg.arrivalAirport.caption}
        <span className={styles.airport_uid}> ({leg.arrivalAirport.uid})</span>
      </Box>
      <Box className={styles.time_line}>
        <Box>{leg.departureDate}</Box>
        <Box>{leg.duration}</Box>
        <Box>{leg.arrivalDate}</Box>
      </Box>
    </Box>
  );
}

export default Leg;
