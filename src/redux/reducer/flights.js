import flights from "../../flights.json";
import produce from "immer";
import { flightsSelector } from "../../redux/selectors";

export default (state = {}, action) =>
  produce(state, (draft) => {
    const { type } = action;

    switch (type) {
      default:
        draft = flightsSelector(state, flights);
        return draft;
    }
  });
