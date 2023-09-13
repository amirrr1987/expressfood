import { CategoryElement } from "@/models";
import { useThemeContext } from "@/stores/app.context";
import { Icon } from "@iconify/react/dist/iconify.js";
import { categories as categoriesMaker } from "./Categories";
import "./TheNavbar.less";
interface Props {
  categories: CategoryElement[] | null;
  loading: boolean;
  filterItems: (categoryId: string) => void;
  children: React.ReactNode;
}
const TheNavbar = ({ categories, loading, filterItems, children }: Props) => {
  const { darkMode, setDarkMode } = useThemeContext();

  const changeTheme = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar ${darkMode ? "bg-black" : "bg-white"}`}>
      <div
        className={`navbar__container ${ darkMode ? "bg-dark border-dark" : "bg-white border-light" }`}
      >
        <ul className="navbar__list">
          { categoriesMaker({ loading, categories, filterItems, darkMode })}
        </ul>
        {children}
        <button
          onClick={changeTheme}
          className={`navbar__btn ${darkMode ? "text-light" : "text-dark" }`}
        >
          <Icon icon={darkMode ? "tabler:sun" : "tabler:moon"} width={20} />
        </button>
      </div>
    </nav>
  );
};

export default TheNavbar;
