import Spinner from "@/Spinner";
import { FastFoodElement } from "@/models";
import { Icon } from "@iconify/react";

const renderImage = (
  imageUrl: string,
  price: number,
  name: string
) => {
  if (!imageUrl) {
    return <Spinner />;
  }
  if (imageUrl) {
    return (
      <>
        <img className="w-full h-60 object-cover" src={imageUrl} title={name} alt={name} />
        <div className="absolute right-4 top-4 bg-green text-sm text-white h-8 px-2 flex items-center justify-center rounded cursor-pointer shadow">
          قیمت {price.toLocaleString()} تومان
        </div>
      </>
    );
  } 
  
};

const FastFoodItem = ({
  imageUrl,
  ingredients,
  name,
  price,
}: FastFoodElement) => {
  return (
    <div className="shadow rounded-t-3xl rounded-b overflow-hidden flex flex-col">
      <div className="h-60 w-full bg-gray animate-ease animate-duration flex justify-center items-center relative">
        {
        renderImage(imageUrl, price, name)}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h4 className="text-center text-xl mb-2 font-medium text-green-700">{name}</h4>
        <p className="text-xs text-gray-400 text-center mb-4  flex-1">
          {ingredients}
        </p>
        <button className="border border-green w-full rounded py-1.7 text-xs duration-400 text-green-600 hover:bg-green hover:text-white active:bg-green-300 flex items-center justify-center gap-x-2">
          <Icon icon="tabler:shopping-cart" width={18} />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};
export default FastFoodItem;
