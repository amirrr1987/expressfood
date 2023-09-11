import "./App.css";
import TheHeader from "@/layouts/TheHeader";
import FastFoodList from "@/pages/FastFoodList";
import TheNavbar from "@/components/TheNavbar";
import { useEffect, useState } from "react";
import { CategoryElement, FastFoodElement } from "@/models";
import services from "@/services";
import SearchBar from "@/components/SearchBar";
import TheFooter from "@/layouts/TheFooter";

function App() {
  
  const [loadingFastFood, setLoadingFastFood] = useState<boolean>(false);
  const [fastFoodList, setFastFoodList] = useState<FastFoodElement[]>([]);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoryElement[]>([]);
  
  const getFastFoodList = async (categoryId = '') => {
    try {
      setLoadingFastFood(true);
      const { data } = await services.get(
        `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
      );
      setFastFoodList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingFastFood(false);
    }
  };

  const getCategories = async () => {
    try {
      setLoadingCategories(true);
      const { data } = await services.get("/FoodCategory/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCategories(false);
    }
  };


  const searchItems = async (term = '') => {
    try {
      setLoadingFastFood(true);
      const { data } = await services.get(
        `/FastFood/search/${term ? "?term=" + term : ""}`
      );
      setFastFoodList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingFastFood(false);
    }
  };

  

  useEffect(() => {
    getCategories();
    getFastFoodList()
  }, []);

  const filterItems= (categoryId: string)=> {
    getFastFoodList(categoryId)
  }


  
  return (
    <>
      <TheHeader />
      <TheNavbar categories={categories} loading={loadingCategories} filterItems={filterItems} >
        <SearchBar  searchItems={searchItems} />
      </TheNavbar>
      <FastFoodList fastFoodList={fastFoodList} loading={loadingFastFood} />
      <TheFooter />
    </>
  );
}

export default App;
