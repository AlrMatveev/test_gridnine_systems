import { Box } from "@mui/material";
import styles from "../filter.module.css";
import { connect } from "react-redux";
import { companyListSelector } from "../../../redux/selectors";
import { setCompany } from "../../../redux/actions";

function Company({ company, setCompany, bestPrices }) {
  const handleChange = (e) => {
    setCompany(e.target.value, e.target.checked);
  };
  console.log(bestPrices);
  return (
    <Box>
      <Box className={styles.header}>Авиакомпании</Box>
      <Box className={styles.body}>
        {company.map((item, i) => {
          return (
            <Box key={i}>
              <input type="checkbox" value={item} onChange={handleChange} />
              <span>
                {item.length > 20
                  ? " - " + item.slice(0, 14) + "...."
                  : " - " + item}
                <span className={styles.price}>
                  {" от " + bestPrices[item]}
                </span>
              </span>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  company: companyListSelector(state),
  bestPrices: state.flights.bestPrices,
});

const mapDispatchToProps = { setCompany };

export default connect(mapStateToProps, mapDispatchToProps)(Company);
