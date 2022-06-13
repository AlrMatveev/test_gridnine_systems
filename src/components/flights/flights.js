import { connect } from "react-redux";
import Flight from "../flight";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { filterFlightsSelector } from "../../redux/selectors";
import "./flight.css";

function Flights({ filterFlights }) {
  const [show, setShow] = useState(2);
  const handleClick = () => {
    setShow(show + 2);
    setTimeout(() => {
      window.scrollBy({
        top: window.screen.height - 170,
        behavior: "smooth",
      });
    }, 1);
  };

  if (filterFlights.length === 0) {
    return <Box className="noResult">Нет полетов</Box>;
  }

  return (
    <Box>
      {/* <TransitionGroup> */}
      {filterFlights.slice(0, show).map((flight) => {
        return (
          <Box key={flight.flightToken}>
            {/* <CSSTransition
            key={flight.flightToken}
            timeout={1000}
            classNames="my-node"
          > */}
            <Flight flight={flight} />
            {/* </CSSTransition> */}
          </Box>
        );
      })}
      {/* </TransitionGroup> */}
      <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
        {filterFlights.length > show && (
          <Button variant="outlined" onClick={handleClick}>
            Показать еще
          </Button>
        )}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state, props) => ({
  filterFlights: filterFlightsSelector(state),
});

export default connect(mapStateToProps)(Flights);
