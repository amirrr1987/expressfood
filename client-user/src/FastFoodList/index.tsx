import { FastFoodElement } from "@/models";
import { map } from "lodash";
import Spinner from "@/Spinner";
import FastFoodItem from "@/FastFoodItem";
import NotFound from "@/assets/images/404.png";

const createFastFoot = (fastFood: FastFoodElement) => {
  return <FastFoodItem key={fastFood.id} {...fastFood} />
}



const renderFastFoodList = (loading: boolean, fastFoodList: FastFoodElement[]) => {
  if (loading) {
    return <div className="col-span-full flex justify-center min-h-40 items-center"><Spinner /></div>
  }
  else {
    if(fastFoodList.length === 0){
      return <img className="col-start-2 col-end-4 w-full h-96 object-contain" src={NotFound} alt="" />
    }
    else{
      return map(fastFoodList, createFastFoot)
    }
  }
}
interface Props{
  fastFoodList: FastFoodElement[];
  loading: boolean
}
const CategoryList = ({fastFoodList,loading}:Props) => {

  return (
    <main>
      <section className="py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
            {
              renderFastFoodList(loading, fastFoodList)
            }
          </div>
        </section>
    </main>
  );
};
export default CategoryList;
