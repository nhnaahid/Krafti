import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import AddCrafts from "../pages/AddCrafts/AddCrafts";
import MyCrafts from "../pages/MyCrafts/MyCrafts";
import Login from "../pages/Login/Login";
import CraftDetails from "../pages/CraftDetails/CraftDetails";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../pages/SignUp/SignUp";
import CategoryItems from "../pages/CategoryItems/CategoryItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/crafts')
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
                element: <AllCrafts></AllCrafts>,
                loader: () => fetch('http://localhost:5000/crafts')
            },
            {
                path: "/add-crafts",
                element: <PrivateRoute><AddCrafts></AddCrafts></PrivateRoute>
            },
            {
                path: "/my-crafts/:email",
                element: <PrivateRoute><MyCrafts></MyCrafts></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/my-crafts/${params.email}`)
            },
            {
                path: "/crafts/:id",
                element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path: '/update-crafts/:id',
                element: <PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path: "/category/:categoryName",
                element: <CategoryItems></CategoryItems>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.categoryName}`)
            }
        ]
    }
])

export default router;