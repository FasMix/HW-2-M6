import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { DetailsPage } from "../../pages/DetailsPage";
import { Layout } from "../Layout";
import { CardPage } from "../../pages/CardPage";
import { CategoryPage } from "../../pages/CategoryPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: '/card',
                element: <CardPage />
            },
            {
                path: '/product/:id',
                element: <DetailsPage />
            },
            {
                path: 'category/:slug',
                element: <CategoryPage/>
            }
        ]
    }
]);

export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}
