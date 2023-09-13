import { FastFoodElement } from "@/models";
import { useThemeContext } from "@/stores/app.context";
import { renderFastFoodList } from "./RenderFastFoodList";

interface Props {
  fastFoodList: FastFoodElement[] | unknown;
  loading: boolean;
  children: React.ReactNode;
}
const CategoryList = ({fastFoodList, loading, children}: Props) => {

  const {darkMode} = useThemeContext()
  
  return (
    <main>
      <section className={`${darkMode ? 'bg-black': 'bg-white'} py-12`}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
          {renderFastFoodList({loading, fastFoodList})}
        </div>
        <div className="container mx-auto px-4">{children}</div>
      </section>
    </main>
  );
};
export default CategoryList;
