import Spinner from "@/components/Spinner";
import { FastFoodElement } from "@/models";
import { Icon } from "@iconify/react";
import { isEmpty } from "lodash";
import "animate.css";
import { useThemeContext } from "@/stores/app.context";
import  "./FastFoodItem.less";

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
    <div className={`card ${theme.darkMode ? 'bg-dark': 'bg-white'}`} style={{animationDelay: delay + 's'}}>
      <div className="card__image-box">
        {
        renderImage(imageUrl, price, name)}
      </div>

      <div className="card__body">
        <h4 className={`card__title ${theme.darkMode ? 'text-green-400': 'text-green-700'}`}>{name}</h4>
        <p className={`${theme.darkMode ? 'text-white': 'text-gray-400'} card__caption`}>
          {ingredients}
        </p>
        <button className={`card__btn ${theme.darkMode ? 'bg-green text-green-900': 'bg-white text-green-600'}`}>
          <Icon icon="tabler:shopping-cart" width={18} />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};
export default FastFoodItem;
