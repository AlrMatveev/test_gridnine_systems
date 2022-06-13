import produce from "immer";
import { SORT, TRANSFER, COMPANY, PRICE } from "../constants";

const initialState = {
  price: [],
  transfer: [],
  company: [],
  how: "",
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, data, checked } = action;

    switch (type) {
      case TRANSFER: {
        if (checked) draft.transfer = [...draft.transfer, data];
        if (!checked)
          draft.transfer = draft.transfer.filter((e) => {
            return e !== data;
          });
        return draft;
      }
      case COMPANY: {
        if (checked) draft.company = [...draft.company, data];
        if (!checked)
          draft.company = draft.company.filter((e) => {
            return e !== data;
          });
        return draft;
      }
      case PRICE: {
        draft.price = data;
        return draft;
      }
      case SORT: {
        draft.how = data;
        return draft;
      }
      default:
        return draft;
    }
  });
