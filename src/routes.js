import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NotFound from "./components/NotFound";

export const MyRoutes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about-us',
        element: <AboutPage />
    },
    // {
    //     path: "*",
    //     element: <NotFound />,
    // },
];