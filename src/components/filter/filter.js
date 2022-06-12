import { Box } from "@mui/material";
import styles from "./filter.module.css";
import Sort from "./sort";
import Filt from "./filt";
import Price from "./price";
import Company from "./company";

function Filter() {
  return (
    <Box className={styles.container}>
      <Box className={styles.filter}>
        <Sort />
        <Filt />
        <Price />
        <Company />
      </Box>
    </Box>
  );
}

export default Filter;
