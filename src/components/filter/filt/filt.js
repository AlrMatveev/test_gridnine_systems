import { Box } from "@mui/material";
import styles from "../filter.module.css";

const items = [
  {
    description: "1 пересадка",
    value: "1",
  },
  {
    description: "без пересадок",
    value: "0",
  },
];

function Filt() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box>
      <Box className={styles.header}>Фильтровать</Box>
      <Box className={styles.body}>
        {items.map((item, i) => {
          return (
            <Box key={i}>
              <input
                type="checkbox"
                value={item.value}
                onChange={handleChange}
              />
              <span>{" - " + item.description}</span>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Filt;
