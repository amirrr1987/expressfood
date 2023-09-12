import { FastFoodElement } from "@/models";
import { isArray, map, size } from "lodash";
import Spinner from "@/components/Spinner";
import FastFoodItem from "@/components/FastFoodItem";
import NotFound from "@/assets/images/404.png";
import { useThemeContext } from "@/stores/app.context";
const createFastFoot = (fastFood: FastFoodElement, loadDelay: number) => {
  return <FastFoodItem key={fastFood.id} {...fastFood} delay={loadDelay} />;
};

const renderFastFoodList = (
  loading: boolean,
  fastFoodList: FastFoodElement[] | unknown,
) => {
  if (loading) {
    return (
      <div className="col-span-full flex justify-center min-h-40 items-center">
        <Spinner />
      </div>
    );
  } else if (isArray(fastFoodList)) {
    if (size(fastFoodList) === 0) {
      return (
        <div className="col-start-2 col-end-4">
          <div className="bg-orange-50 text-orange px-4 py-2 rounded text-center mb-4 animate__animated animate__lightSpeedInRight">
            برای کلید واژه فوق هیچ آیتمی پیدا نشد.
          </div>
          <img
            className="col-start-2 col-end-4 w-full h-96 object-contain animate__animated animate__zoomIn"
            src={NotFound}
            alt=""
          />
        </div>
      );
    } else {
      let loadDelay: number = 0;
      return map(fastFoodList, (fastFood: FastFoodElement) => {
        loadDelay += 0.3;
        return createFastFoot(fastFood, loadDelay);
      });
    }
  }
};
interface Props {
  fastFoodList: FastFoodElement[] | unknown;
  loading: boolean;
  children: React.ReactNode;
}
const CategoryList = ({
  fastFoodList,
  loading,
  children,
}: Props) => {

  const theme = useThemeContext()
  
  return (
    <main>
      <section className={`${theme.darkMode ? 'bg-black': 'bg-white'} py-12`}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
          {renderFastFoodList(loading, fastFoodList)}
        </div>
        <div className="container mx-auto px-4">{children}</div>
      </section>
    </main>
  );
};
export default CategoryList;
