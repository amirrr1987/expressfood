import "./App.css";
import TheHeader from "@/layouts/TheHeader";
import FastFoodList from "@/pages/FastFoodList";
import TheNavbar from "@/layouts/TheNavbar";
import { useState } from "react";
import { useServices } from "@/services";
import SearchBar from "@/components/SearchBar";
import TheFooter from "@/layouts/TheFooter";
import { size } from "lodash";

const App: React.FC = () => {
  const [pageSize, setPageSize] = useState(1);
  const [page, setPage] = useState(1);

  const [url, setUrl] = useState<string>("/FastFood/list");

  const [fastFoodList, , loadingFastFood] = useServices({
    method: "GET",
    url: url,
    page: page,
    pageSize: pageSize,
  });

  const [categories, , loadingCategories] = useServices({
    method: "GET",
    url: "/FoodCategory/categories",
  });

  const searchItems = (term: string = "") => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  };

  const filterItems = (categoryId: string) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  };

  return (
    <>
      <TheHeader />
      <TheNavbar
        categories={categories}
        loading={loadingCategories}
        filterItems={filterItems}
      >
        <SearchBar searchItems={searchItems} />
      </TheNavbar>
      <FastFoodList
        fastFoodList={fastFoodList}
        loading={loadingFastFood}
        page={page}
        pageSize={pageSize}
      >
        <input
          type="number"
          className="border"
          min={1}
          max={size(fastFoodList)}
          value={page}
          onInput={(event) => setPage(event.target.value)}
        />
        <select onChange={(event)=> setPageSize(event.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </FastFoodList>
      <TheFooter />
    </>
  );
};

export default App;
