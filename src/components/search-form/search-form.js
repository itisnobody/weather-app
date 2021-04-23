import React from "react";

import "./search-form.scss"

const SearchForm = () => {
  return (
    <form className={'search-form'} action="">
      <input className={'search-form__input'}
             type="text"
             placeholder="Search" />
      <button className={'btn btn--icon search-form__btn'}>
        <i className={'icon icon--search'}></i>
        <span className={'btn__txt btn__txt--hidden'}>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;