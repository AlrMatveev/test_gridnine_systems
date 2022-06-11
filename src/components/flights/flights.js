import { connect } from "react-redux";
import Flight from "../flight";
import { useState } from "react";

function Flights({ flights }) {
  return flights.map((flight) => {
    return <Flight key={flight.flightToken} flight={flight} />;
  });
}

const mapStateToProps = (state, props) => ({
  flights: state.flights,
});

export default connect(mapStateToProps)(Flights);
