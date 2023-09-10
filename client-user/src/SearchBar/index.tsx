import { Icon } from "@iconify/react";
import { useState } from "react";
import "./index.style.less";

interface Props{
  searchItems: ()=> Promise<void>
}

const SearchBar = ({searchItems}:Props) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    searchItems(value);

  }
  return (
    <form
      className={`search-bar flex items-center border px-2 rounded w-full duration-1000 ${focus ? "flex-1" : ""
        }`}
      onMouseEnter={() => setFocus(false)}
      onMouseLeave={() => setFocus(true)}
      onSubmit={onSubmit}
    >
      <Icon icon="tabler:search" />
      <input
        type="text"
        className="focus-visible:outline-none py-2 flex-1 mr-2"
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
