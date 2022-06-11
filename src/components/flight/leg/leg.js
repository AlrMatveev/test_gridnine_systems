import { Box, Divider } from "@mui/material";
import styles from "./leg.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Leg({ leg }) {
  const convertTime = (t) => {
    t = Number(t);
    const m = Math.floor((t % 3600) / 60);
    const s = Math.floor((t % 3600) % 60);
    const hDisplay = m > 0 ? m + " ч " : " ";
    const mDisplay = s > 0 ? s + " мин " : "";
    return hDisplay + mDisplay;
  };
  const convertDate = (d) => {
    const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    const date = new Date(d);
    const day = date.getDate();
    const dayN = date.getDay();
    const month = date.toLocaleString("default", { month: "long" });
    return day + " " + month.slice(0, 3) + ". " + days[dayN];
  };
  const convertDateTime = (d) => {
    const date = new Date(d);
    const h = date.getHours();
    const hDisplay = String(h).length < 2 ? "0" + h : h;
    const m = date.getMinutes();
    const mDisplay = String(m).length < 2 ? "0" + m : m;
    return hDisplay + ":" + mDisplay;
  };

  return (
    <Box className={styles.leg}>
      <Box className={styles.caption}>
        {leg.departureCity && leg.departureCity.caption},{" "}
        {leg.departureAirport.caption}
        <span className={styles.airport_uid}>({leg.departureAirport.uid})</span>
        <ArrowRightAltIcon className={styles.arrow} />
        {leg.arrivalCity && leg.arrivalCity.caption},{" "}
        {leg.arrivalAirport.caption}
        <span className={styles.airport_uid}>({leg.arrivalAirport.uid})</span>
      </Box>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Box className={styles.time_line}>
        <Box>
          {convertDateTime(leg.departureDate)}{" "}
          <span className={styles.date}>{convertDate(leg.departureDate)}</span>
        </Box>
        <Box className={styles.duration}>
          <AccessTimeIcon />
          {convertTime(leg.duration)}
        </Box>
        <Box>
          <span className={styles.date}>{convertDate(leg.arrivalDate)}</span>{" "}
          {convertDateTime(leg.arrivalDate)}
        </Box>
      </Box>
      <Box className={styles.transfer}>
        <Box className={styles.transferInside}>
          {leg.transfer > 0 && leg.transfer + " пересадка"}
        </Box>
      </Box>
      <Box>Рейс выполняет: {leg.airline}</Box>
    </Box>
  );
}

export default Leg;
