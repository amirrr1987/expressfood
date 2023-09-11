import "./App.css";
import TheHeader from "@/layouts/TheHeader";
import FastFoodList from "@/pages/FastFoodList";
import TheNavbar from "@/layouts/TheNavbar";
import { useState } from "react";
import { useServices } from "@/services";
import SearchBar from "@/components/SearchBar";
import TheFooter from "@/layouts/TheFooter";

const App: React.FC = () => {
  const [url, setUrl] = useState<string>("/FastFood/list");

  const [fastFoodList, , loadingFastFood] = useServices({
    method: "GET",
    url: url,
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
      <FastFoodList fastFoodList={fastFoodList} loading={loadingFastFood} />
      <TheFooter />
    </>
  );
};

export default App;
