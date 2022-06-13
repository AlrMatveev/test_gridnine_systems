import { GROWTH, DECTEASE, ROAD } from "./constants";

export const flightsSelector = (state, { result }) => {
  return result.flights.map((e) => {
    const legs = e.flight.legs.map((e) => {
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
      totalDuration: legs.reduce(function (acc, leg) {
        return acc.duration + leg.duration;
      }),
      totalTransfer: legs.reduce(function (acc, leg) {
        return acc.transfer + leg.transfer;
      }),
    };
  });
};

export const filterFlightsSelector = ({ flights, filters }) => {
  let filterFlights = flights.map((e) => {
    return e;
  });

  if (filters.transfer.length > 0) {
    filterFlights = filterFlights.filter((flight) => {
      if (filters.transfer.includes(String(flight.totalTransfer)))
        return flight;
    });
  }

  if (filters.company.length > 0) {
    filterFlights = filterFlights.filter((flight) => {
      if (filters.company.includes(flight.legs[0].airline)) return flight;
    });
  }

  if (filters.price.length > 0) {
    filterFlights = filterFlights.filter((flight) => {
      if (
        flight.price.amount > filters.price[0] &&
        flight.price.amount < filters.price[1]
      )
        return flight;
    });
  }

  if (filters.how === GROWTH) {
    filterFlights.sort((a, b) => {
      return +a.price.amount - +b.price.amount;
    });
  } else if (filters.how === DECTEASE) {
    filterFlights.sort((a, b) => {
      return +b.price.amount - +a.price.amount;
    });
  } else if (filters.how === ROAD) {
    filterFlights.sort((a, b) => +a.totalDuration - +b.totalDuration);
  }

  return filterFlights;
};

function uniq_fast(a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for (var i = 0; i < len; i++) {
    var item = a[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out;
}

export const transferListSelector = ({ flights }) => {
  const transfers = flights
    .map((flight) => {
      return flight.totalTransfer;
    })
    .sort();
  return uniq_fast(transfers);
};

export const companyListSelector = ({ flights }) => {
  const airline = flights
    .map((flight) => {
      return flight.legs[0].airline;
    })
    .sort();
  return uniq_fast(airline);
};

export const extremumListSelector = ({ flights }) => {
  const prices = flights.map((flight) => {
    return flight.price.amount;
  });
  return [Math.min.apply(null, prices), Math.max.apply(null, prices)];
};
