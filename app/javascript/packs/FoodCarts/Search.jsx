import React from "react";
import { useTranslation } from "react-i18next";

const Search = ({ name, category, description, open, schedule, id }) => {
  const t = useTranslation().t;
  return (
    <div className="search-bar">
      <form action="/food_carts" method="get" className="form">
        <label htmlFor="header-search">
          <span className="visually-hidden">{t("search_bar")}</span>
        </label>
        <input
          type="search"
          className="form-control"
          placeholder="Find by name or location"
          name="query"
          id="query"
        />
        <button type="submit" className="search-button">
          {t("buttons.search")}
        </button>
      </form>
    </div>
  );
};

export default Search;
