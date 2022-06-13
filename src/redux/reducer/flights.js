import flights from "../../flights.json";
import produce from "immer";
import { flightsSelector, bestPricesSelector } from "../../redux/selectors";
import { SETFLIGHTS } from "../constants";

const initialState = {
  flights: [],
  bestPrices: {},
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type } = action;

    switch (type) {
      case SETFLIGHTS: {
        draft.flights = flightsSelector(state, flights);
        draft.bestPrices = bestPricesSelector(state, flights);
        return draft;
      }
      default:
        return draft;
    }
  });
