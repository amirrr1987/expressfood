import NavbarItem from "./Item";
import { CategoryElement } from "@/models";


interface CreateCategory {
    category: CategoryElement;
    filterItems: (categoryId: string) => void;
    darkMode: boolean;
  }
  
export  const createCategory = ({ category, filterItems, darkMode,}: CreateCategory) => {
    return (
      <NavbarItem
        key={category.id}
        {...category}
        filterItems={filterItems}
        darkMode={darkMode}
      />
    );
  };