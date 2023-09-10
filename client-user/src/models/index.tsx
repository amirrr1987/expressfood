import * as z from "zod";


export const CategoryElementSchema = z.object({
    "id": z.number(),
    "name": z.string(),
});
export type CategoryElement = z.infer<typeof CategoryElementSchema>;




export const FastFoodElementSchema = z.object({
    "id": z.number(),
    "name": z.string(),
    "price": z.number(),
    "ingredients": z.string(),
    "imageUrl": z.string(),
});
export type FastFoodElement = z.infer<typeof FastFoodElementSchema>;
