import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./views/layouts/GuestLayout";
import Home from "./views/pages/Home";
import Movies from "./views/pages/Movies";
import TvShows from "./views/pages/TvShows";
import Watch from "./views/pages/Watch";
import CategoryPages from "./views/sections/CategoryPages";
import Welcome from "./views/pages/Welcome";




const router = createBrowserRouter([
    {
        path: "/",
        element:<GuestLayout />,
        children:[
            {
                path:"/",
                element:<Welcome />
            },
            {
                path:"/home",
                element:<Home />
            },
            {
                path:"/movies", 
                element:<Movies />,
                children:[
                    {
                        path:"/movies",
                        element:<CategoryPages url={"/movies/trending"}/>
                    },
                    {
                        path:"/movies/popular",
                        element:<CategoryPages url={"/movies/latest"}/>
                    },
                    {
                        path:"/movies/now_playing",
                        element:<CategoryPages url={"/movies/now_playing"}/>
                    },
                    {
                        path:"/movies/top_rated",
                        element:<CategoryPages url={"/movies/top_rated"}/>
                    },
                    {
                        path:"/movies/upcoming",
                        element:<CategoryPages url={"/movies/upcoming"}/>
                    },

                ]
            },
            {
                path:"/tv", 
                element:<TvShows />,
                children:[
                    {
                        path:"/tv",
                        element:<CategoryPages url={"/tvShows/popular"}/>
                    },
                    {
                        path:"/tv/popular",
                        element:<CategoryPages url={"/tvShows/latest"}/>
                    },
                    {
                        path:"/tv/top_rated",
                        element:<CategoryPages url={"/tvShows/top_rated"}/>
                    },
                    {
                        path:"/tv/airing",
                        element:<CategoryPages url={"/tvShows/airing"}/>
                    },
                    {
                        path:"/tv/on_air",
                        element:<CategoryPages url={"/tvShows/on_air"}/>
                    },

                ]
            },
            {
                path:`/watch`, 
                element:<Watch/>
            },

        ]
    }
]);

export default router;
