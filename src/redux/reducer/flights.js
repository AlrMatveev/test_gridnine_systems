import flights from "../../flights.json";
import produce from "immer";
import { flightsSelector } from "../../redux/selectors";
import { SORT, GROWTH, DECTEASE, ROAD } from "../constants";

export default (state = {}, action) =>
  produce(state, (draft) => {
    const { type } = action;

    switch (type) {
      case SORT + GROWTH: {
        return (draft = draft.sort(
          (a, b) => +a.price.amount - +b.price.amount
        ));
      }
      case SORT + DECTEASE: {
        return (draft = draft.sort(
          (a, b) => +b.price.amount - +a.price.amount
        ));
      }
      case SORT + ROAD: {
        return (draft = draft.sort(
          (a, b) => +a.totalDuration - +b.totalDuration
        ));
      }
      default:
        console.log("get flights");
        return (draft = flightsSelector(state, flights));
    }
  });
