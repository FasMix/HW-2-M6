import { data } from "react-router-dom"
import { $api } from "../../api/api"
import { useQuery } from "@tanstack/react-query";

const getByCategoryProducts = async (category) => {
    const response = await $api.get(`/products/category/${category}`)
    return response.data;
}

export const useCategoriesList = (slug) =>{
    return useQuery({
        queryKey: ['products', 'categories', slug],
        queryFn: () => getByCategoryProducts(slug),
        enabled: !!slug
    });
};