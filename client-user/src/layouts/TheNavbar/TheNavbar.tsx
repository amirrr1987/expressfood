import Spinner from "@/components/Spinner";
import { isArray, map } from "lodash";
import { CategoryElement } from "@/models";
import NavbarItem from "./Item";
import { useThemeContext } from "@/stores/app.context";
import { Icon } from "@iconify/react/dist/iconify.js";

const createCategory = (
  category: CategoryElement,
  filterItems: (categoryId: string) => void,
  darkMode: boolean
) => {
  return (
    <NavbarItem key={category.id} {...category} filterItems={filterItems} darkMode={darkMode} />
  );
};

const renderCategories = (
  loading: boolean,
  categories: CategoryElement[] | null,
  filterItems: (categoryId: string) => void,
  darkMode: boolean
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
            className={darkMode ? 'text-light': 'text-dark'}
            onClick={(event) => {
              event.preventDefault();
              filterItems("");
            }}
          >
            همه
          </a>
        </li>

        {isArray(categories)
          ? map(categories, (category) => createCategory(category, filterItems,darkMode))
          : null}
      </>
    );
  }
};

interface Props {
  categories: CategoryElement[] | null;
  loading: boolean;
  filterItems: (categoryId: string) => void;
  children: React.ReactNode;
}
const TheNavbar = ({ categories, loading, filterItems, children }: Props) => {

  const theme  = useThemeContext()
  const changeTheme = ()=>{
    theme.setDarkMode(!theme.darkMode);
  }
  return (
    <nav className={theme.darkMode ? 'bg-black' : 'bg-white'}>
      <div className={`container mx-auto px-8  ${theme.darkMode ? 'bg-dark border-dark' : 'bg-white border-light'} text-black border shadow rounded h-18  flex items-center justify-between gap-x-8 -translate-y-9	`}>
        <ul className="flex gap-x-4 w-full">
          {renderCategories(loading, categories, filterItems ,theme.darkMode)}
        </ul>
        {children}
        <button onClick={changeTheme} className={`${theme.darkMode ? 'text-light': 'text-dark'} px-4 py-2 rounded`}>
          <Icon icon={theme.darkMode? 'tabler:sun' : 'tabler:moon'} width={20} />
        </button>
      </div>
    </nav>
  );
};

export default TheNavbar;
