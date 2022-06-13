import { Box, Slider } from "@mui/material";
import styles from "../filter.module.css";
import { connect } from "react-redux";
import { extremumListSelector } from "../../../redux/selectors";
import { useState } from "react";
import { setPrice } from "../../../redux/actions";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 1000;

function Price({ extremum, setPrice }) {
  const [value, setValue] = useState(extremum);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
    setPrice(value);
  };

  // const handleMouseUp = () => {
  //   setPrice(value);
  // };

  return (
    <Box>
      <Box className={styles.header}>Цена</Box>
      <Box className={styles.extremum}>{"от " + value.join(" до ")}</Box>
      <Box>
        <Slider
          size="small"
          getAriaLabel={() => "Minimum distance"}
          value={value}
          min={extremum[0]}
          max={extremum[1]}
          onChange={handleChange}
          // onMouseUp={handleMouseUp}
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  extremum: extremumListSelector(state),
});

const mapDispatchToProps = {
  setPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(Price);
