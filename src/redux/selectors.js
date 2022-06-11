export const flightsSelector = (state, { result }) => {
  return result.flights.map((e) => {
    const legs = e.flight.legs.map((e) => {
      // const airline = e.segments.map((e) => {
      //   return e.airline.caption;
      // });
      return {
        departureCity: e.segments[0].departureCity,
        arrivalCity: e.segments[e.segments.length - 1].arrivalCity,
        departureAirport: e.segments[0].departureAirport,
        arrivalAirport: e.segments[e.segments.length - 1].arrivalAirport,
        departureDate: e.segments[0].departureDate,
        arrivalDate: e.segments[e.segments.length - 1].arrivalDate,
        duration: e.duration,
        transfer: e.segments.length - 1,
        airline: e.segments[0].airline.caption,
      };
    });
    return {
      flightToken: e.flightToken,
      price: e.flight.price.total,
      legs: legs,
    };
  });
};

export const convertTimeSelector = ({ time }) => {
  return time;
};
