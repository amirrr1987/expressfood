import { Icon } from "@iconify/react";
import { useState } from "react";
import "animate.css";
import "./index.style.less";

interface Props{
  searchItems: ()=> void
}

const SearchBar = ({searchItems}:Props) => {
  const [value, setValue] = useState("");
  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    searchItems(value);

  }
  return (
    <form
      className="search-bar"
      onSubmit={onSubmit}
    >
      <Icon className="search-bar__icon" icon="tabler:search" />
      <input
        type="text"
        className="search-bar__input"
        placeholder="جستجوی فست فود"
        value={value}
        onInput={(event: unknown) =>
          setValue(event.target.value)
        }
      />
    </form>
  );
};
export default SearchBar;
