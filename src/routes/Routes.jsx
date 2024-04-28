import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import AddCrafts from "../pages/AddCrafts/AddCrafts";
import MyCrafts from "../pages/MyCrafts/MyCrafts";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";

const router=createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/all-crafts",
                element: <AllCrafts></AllCrafts>
            },
            {
                path: "/add-crafts",
                element: <AddCrafts></AddCrafts>
            },
            {
                path: "/my-crafts",
                element: <MyCrafts></MyCrafts>
            }
        ]
    }
])

export default router;