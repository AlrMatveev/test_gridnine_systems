import { Box } from "@mui/material";
import styles from "../filter.module.css";

const items = [
  {
    description: "по возрастанию цены",
    value: "growth",
  },
  {
    description: "по убыванию цены",
    value: "decrease",
  },
  {
    description: "по времени пути",
    value: "road",
  },
];

function Company() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box>
      <Box className={styles.header}>Авиакомпании</Box>
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

export default Company;
