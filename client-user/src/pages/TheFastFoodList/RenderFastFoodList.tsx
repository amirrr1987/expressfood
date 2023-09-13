
import { isArray, map, size } from "lodash";
import Spinner from "@/components/Spinner";
import NotFound from "@/assets/images/404.png";
import { FastFoodElement } from "@/models";
import { createFastFoot } from "./CreateFastFoot";


  


interface RenderFastFoodList {
    loading: boolean,
    fastFoodList: FastFoodElement[] | unknown,
}
export const renderFastFoodList = ({loading, fastFoodList}: RenderFastFoodList) => {
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
          return createFastFoot({fastFood, loadDelay});
        });
      }
    }
  };