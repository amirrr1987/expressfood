import Spinner from "@/Spinner";
import { map } from "lodash";
import { CategoryElement } from "@/models";
import NavbarItem from "./Item";

const createCategory = (
  category: CategoryElement,
  filterItems: (categoryId: string) => void
) => {
  return (
    <NavbarItem key={category.id} {...category} filterItems={filterItems} />
  );
};

const renderCategories = (
  loading: boolean,
  categories: CategoryElement[],
  filterItems: (categoryId: string) => void
) => {
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
            onClick={(event) => {
              event.preventDefault();
              filterItems("");
            }}
          >
            همه فست فود‌ها
          </a>
        </li>
        {map(categories, (category) => createCategory(category, filterItems))}
      </>
    );
  }
};

interface Props {
  categories: CategoryElement[];
  loading: boolean;
  filterItems: (categoryId: string) => void;
  children: React.ReactNode;
}
const TheNavbar = ({ categories, loading, filterItems, children }: Props) => {
  return (
    <nav className="">
      <div className="container mx-auto px-4 bg-white text-black border shadow rounded h-18 -mt-9 flex items-center justify-between">
        <ul className="flex gap-x-8 w-full">
          {renderCategories(loading, categories, filterItems)}
        </ul>
        {children}
      </div>
    </nav>
  );
};

export default TheNavbar;
