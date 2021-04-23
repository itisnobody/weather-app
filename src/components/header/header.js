import React from "react";

import "./header.scss";
import SearchForm from "../search-form";

const Header = () => {
  return (
    <header className={'header'} >
      <button className={'btn btn--icon header__btn'}>
        <i className={'icon icon--home'}></i>
        <span className={'btn__txt btn__txt--hidden'}>Home</span>
      </button>
      <SearchForm />
    </header>
  );
};

export default Header;