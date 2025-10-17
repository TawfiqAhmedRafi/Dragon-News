import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path :"/",
            element: <HomeLayout></HomeLayout>,
            children :[
                {
                    path : "",
                    element : <Home></Home>
                },
                {
                    path : "/category/:id",
                    element : <CategoryNews></CategoryNews>
                }
            ]
        },
        {
            path :"/auth",
            element: <h1>Authentication Layout</h1>
        },
        {
            path:"/news",
            element: <h2>News Layout</h2>
        },
        {
            path:"/*",
            element: <h2>Error</h2>
        },
    ]
)
export default router;