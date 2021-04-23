const weatherLoaded = weather => {
  return {
    type: "FETCH_WEATHER_SUCCESS",
    payload: weather
  };
};

const weatherRequested = () => {
  return {
    type: 'FETCH_WEATHER_REQUESTED'
  };
};

const weatherError = error => {
  return {
    type: 'FETCH_WEATHER_FAILURE',
    payload: error
  };
};

export {
  weatherLoaded,
  weatherRequested,
  weatherError
}