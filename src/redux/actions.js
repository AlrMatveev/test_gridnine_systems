import { SORT, TRANSFER, COMPANY, PRICE } from "./constants";

export const sort = (data) => ({ type: SORT, data });

export const setTransfer = (data, checked) => ({
  type: TRANSFER,
  data,
  checked,
});

export const setCompany = (data, checked) => ({
  type: COMPANY,
  data,
  checked,
});

export const setPrice = (data) => ({
  type: PRICE,
  data,
});
