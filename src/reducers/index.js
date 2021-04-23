const reducer = (state, action) => {

  if (state === undefined) {
    return {
      loading: true,
      error: false,
      current: {}
    };
  }

  switch (action.type) {
    case ("FETCH_WEATHER_SUCCESS"):
      return {
        loading: false,
        error: false,
        current: action.payload
      };

    case ('FETCH_WEATHER_REQUESTED'):
      return {
        ...state,
        loading: true,
        error: false
      };

    case ('FETCH_WEATHER_FAILURE'):
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;