import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login/Login";
import SignUp from "../component/Signup/Signup";
import Products from "../component/Products/Products";
import Cart from "../component/Carts/Carts";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/carts",
                element: <Cart />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
]);
