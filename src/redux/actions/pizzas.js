import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?category=${category !== null ? category : ""}&_sort=${sortBy}&_order=${sortBy}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export default setPizzas;
