
// import SearchBar from "@/components/SearchBar";
// import TheNavbar from "@/layouts/TheNavbar";
// import { useState } from "react";
// import { useServices } from "@/services";
// import { chunk, map } from "lodash";
// import { FastFoodElement } from "@/models";
// import FastFoodList from "@/pages/TheFastFoodList";
// import Navbar from "@/layouts/Navbar";

import TheFooter from "@/layouts/TheFooter";
import TheHeader from "@/layouts/TheHeader";
import TheNavbar from "@/layouts/TheNavbar";


const TheUser = () => {
    // const [url, setUrl] = useState<string>("/FastFood/list");

    // const [fastFoodList, , loadingFastFood] = useServices({
    //   method: "GET",
    //   url: url,
    // });
  
    // const [categories, , loadingCategories] = useServices({
    //   method: "GET",
    //   url: "/FoodCategory/categories",
    // });
  
    // const searchItems = (term: string = "") => {
    //   setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
    // };
  
    // const filterItems = (categoryId: string) => {
    //   setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
    // };
  
    // const [totalInPage, setTotalInPage] = useState(4);
    // const [page, setPage] = useState(1);
    // const chunkedFastFoodList = chunk(fastFoodList, totalInPage);
  
  
    // const createBtn = (_item: FastFoodElement, index: number) => (
    //   <button
    //     key={index}
    //     type="button"
    //     className="border w-8 h-8 rounded"
    //     value={index + 1}
    //     onClick={() => setPage(index)}
    //   >
    //     {index + 1}
    //   </button>
    // );
  
    // const onChange = (e)=>{
    //   setTotalInPage(e.target.value)
    //   setPage(0)
    // }

  //   <TheNavbar
  //   categories={categories}
  //   loading={loadingCategories}
  //   filterItems={filterItems}
  // >
  //   <SearchBar searchItems={searchItems} />
  // </TheNavbar>
  // <FastFoodList
  //   fastFoodList={chunkedFastFoodList[page]}
  //   loading={loadingFastFood}
  // >
  //   <div className="flex gap-x-8">
  //     <select onChange={onChange}>
  //       <option value={4}>4</option>
  //       <option value={8}>8</option>
  //       <option value={16}>16</option>
  //     </select>
  //     <div className="flex gap-4">
  //       {map(chunkedFastFoodList, createBtn)}
  //     </div>
  //   </div>
  // </FastFoodList>
  return (
      <>
      <TheNavbar/>
      <TheHeader />
      <TheFooter />
      </>
  );
};
export default TheUser;
