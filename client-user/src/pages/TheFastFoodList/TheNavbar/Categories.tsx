import Spinner from "@/components/Spinner";
import { CategoryElement } from "@/models";
import { isArray, map } from "lodash";
import { createCategory } from "./CreateCategory";

interface Categories {
  loading: boolean;
  categories: CategoryElement[] | null;
  filterItems: (categoryId: string) => void;
  darkMode: boolean;
}

export const categories = ({ loading, categories, filterItems, darkMode,}: Categories) => {
  if (loading) {
    return (
      <div className="flex justify-center w-full">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        <li>
          <a
            href="#"
            className={darkMode ? "text-light" : "text-dark"}
            onClick={(event) => {
              event.preventDefault();
              filterItems("");
            }}
          >
            همه
          </a>
        </li>

        {isArray(categories)
          ? map(categories, (category) =>
              createCategory({ category, filterItems, darkMode })
            )
          : null}
      </>
    );
  }
};
