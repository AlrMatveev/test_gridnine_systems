import { Box } from "@mui/material";
import styles from "../filter.module.css";
import { connect } from "react-redux";
import { sort } from "../../../redux/actions";
import { GROWTH, DECTEASE, ROAD } from "../../../redux/constants";

const items = [
  {
    description: "по возрастанию цены",
    value: GROWTH,
  },
  {
    description: "по убыванию цены",
    value: DECTEASE,
  },
  {
    description: "по времени пути",
    value: ROAD,
  },
];

function Sort({ sort }) {
  const handleChange = (e) => {
    sort(e.target.value);
  };
  return (
    <Box>
      <Box className={styles.header}>Сортировать</Box>
      <Box className={styles.body}>
        {items.map((item, i) => {
          return (
            <Box key={i}>
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

const mapDispatchToProps = { sort };

export default connect(null, mapDispatchToProps)(Sort);
