import flights from "../../flights.json";

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    default:
      return flights;
  }
};
