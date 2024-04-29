import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import AddCrafts from "../pages/AddCrafts/AddCrafts";
import MyCrafts from "../pages/MyCrafts/MyCrafts";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import CraftDetails from "../pages/CraftDetails/CraftDetails";

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
                element: <AddCrafts></AddCrafts>
            },
            {
                path: "/my-crafts/:email",
                element: <MyCrafts></MyCrafts>,
                loader: ({ params }) => fetch(`http://localhost:5000/my-crafts/${params.email}`)
            },
            {
                path: "/crafts/:id",
                element: <CraftDetails></CraftDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
            }
        ]
    }
])

export default router;