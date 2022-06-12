import { connect } from "react-redux";
import Flight from "../flight";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./flight.css";

function Flights({ flights }) {
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
  return (
    <Box>
      <TransitionGroup id="for_scrolling">
        {flights.slice(0, show).map((flight) => {
          return (
            <CSSTransition
              key={flight.flightToken}
              timeout={1000}
              classNames="my-node"
            >
              <Flight flight={flight} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
        <Button variant="outlined" onClick={handleClick}>
          Показать еще
        </Button>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state, props) => ({
  flights: state.flights,
});

export default connect(mapStateToProps)(Flights);
