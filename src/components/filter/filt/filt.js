import { Box } from "@mui/material";
import styles from "../filter.module.css";
import { connect } from "react-redux";
import { transferListSelector } from "../../../redux/selectors";
import { setTransfer } from "../../../redux/actions";

const description = [
  " - без пересадок",
  " - 1 пересадка",
  " - 2 пересадки",
  " - 3 пересадки",
  " - 4 пересадки",
];

function Filt({ transfers, setTransfer }) {
  const handleChange = (e) => {
    setTransfer(e.target.value, e.target.checked);
  };
  return (
    <Box>
      <Box className={styles.header}>Фильтровать</Box>
      <Box className={styles.body}>
        {transfers.map((transfer, i) => {
          return (
            <Box key={i}>
              <input type="checkbox" value={transfer} onChange={handleChange} />
              <span>{description[transfer]}</span>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  transfers: transferListSelector(state),
});

const mapDispatchToProps = { setTransfer };

export default connect(mapStateToProps, mapDispatchToProps)(Filt);
