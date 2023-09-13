import FastFoodItem from "@/components/FastFoodItem";
import { FastFoodElement } from "@/models";


interface CreateFastFoot{
    fastFood: FastFoodElement
    loadDelay: number
}
export const createFastFoot = ({fastFood, loadDelay}: CreateFastFoot) => {
    return <FastFoodItem key={fastFood.id} {...fastFood} delay={loadDelay} />;
};