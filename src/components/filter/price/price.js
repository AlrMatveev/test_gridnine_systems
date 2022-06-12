import { Box, Slider } from "@mui/material";
import styles from "../filter.module.css";
import { useState } from "react";

function Price() {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event);
  };
  return (
    <Box>
      <Box className={styles.header}>Цена</Box>
      <Box>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
}

export default Price;
