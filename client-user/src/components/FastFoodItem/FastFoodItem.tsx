import Spinner from "@/components/Spinner";
import { FastFoodElement } from "@/models";
import { Icon } from "@iconify/react";
import { isEmpty } from "lodash";
import "animate.css";
import { useThemeContext } from "@/stores/app.context";

const renderImage = (
  imageUrl: string,
  price: number,
  name: string
) => {
  if (isEmpty(imageUrl)) {
    return <Spinner />;
  }
  if (!isEmpty(imageUrl)) {
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

interface Props extends FastFoodElement{
  delay: number
}

const FastFoodItem = ({
  imageUrl,
  ingredients,
  name,
  price,
  delay = 0
}: Props) => {

  const theme = useThemeContext()
  return (
    <div className={`${theme.darkMode ? 'bg-dark': 'bg-white'} shadow rounded-t-3xl rounded-b overflow-hidden flex flex-col animate__animated  animate__backInUp`} style={{animationDelay: delay + 's'}}>
      <div className="h-60 w-full bg-gray animate-ease animate-duration flex justify-center items-center relative">
        {
        renderImage(imageUrl, price, name)}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h4 className={`${theme.darkMode ? 'text-green-400': 'text-green-700'} text-center text-xl mb-2 font-medium `}>{name}</h4>
        <p className={`${theme.darkMode ? 'text-white': 'text-gray-400'} text-xs  text-center mb-4 flex-1`}>
          {ingredients}
        </p>
        <button className={`${theme.darkMode ? 'bg-green text-green-900': 'bg-white text-green-600'} border border-green w-full rounded py-1.7 text-xs duration-400  hover:bg-green hover:text-white active:bg-green-300 flex items-center justify-center gap-x-2`}>
          <Icon icon="tabler:shopping-cart" width={18} />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};
export default FastFoodItem;
