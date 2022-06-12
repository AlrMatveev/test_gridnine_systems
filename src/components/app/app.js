import Filter from "../filter";
import Flights from "../flights";
import styles from "./app.module.css";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <Box className={styles.container}>
        <Filter />
        <Flights />
      </Box>
    </Container>
  );
}

export default App;
