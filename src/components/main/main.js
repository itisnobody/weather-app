import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";

import drizzle from "../../img/drizzle.svg";
import "./main.scss";
import { WeatherServiceContext } from "../services-context";
import { weatherLoaded, weatherError } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const Summary = ({ current }) => {

  const { temp, cityName } = current;

  return (
    <main className={"main"} >
      <img className={"main__img"}
           src={drizzle} alt=""/>
      <div className={"main__info"}>
        <div className="main__temperature">
          <span className="main__temperature-value">{temp}</span>
          <span className="main__temperature-units">°C</span>
        </div>
        <h2 className={"main__title"}>{cityName}</h2>
      </div>
    </main>
  );
};

const Main = ({ current, loading, error, weatherError, weatherLoaded }) => {

  const weatherApi = useContext(WeatherServiceContext);

  useEffect(() => {
    let canceled = false;
    weatherApi.getCity('kyiv')
      .then(data => !canceled && weatherLoaded(data))
      .catch(error => !canceled && weatherError(error));
    return () => canceled = true;
  }, [weatherApi, weatherError, weatherLoaded]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <Summary current={current} />;
};

const mapStateToProps = ({current, loading, error}) => {
  return {
    loading,
    error,
    current
  };
};

const mapDispatchToProps = {
    weatherLoaded,
    weatherError
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);