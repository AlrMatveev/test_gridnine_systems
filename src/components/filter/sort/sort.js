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

function Sort() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box>
      <Box className={styles.header}>Сортировать</Box>
      <Box className={styles.body}>
        {items.map((item) => {
          return (
            <Box>
              <input
                name="sort"
                type="radio"
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

export default Sort;
