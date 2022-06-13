import flights from "../../flights.json";
import produce from "immer";
import { flightsSelector } from "../../redux/selectors";
import { SETFLIGHTS } from "../constants";

export default (state = {}, action) =>
  produce(state, (draft) => {
    const { type } = action;

    switch (type) {
      case SETFLIGHTS: {
        return (draft = flightsSelector(state, flights));
      }
      default:
        return draft;
    }
  });
