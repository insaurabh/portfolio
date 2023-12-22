/**
 * Project Name: Portfolio
 * Description : A small portfolio website
 *
 * @author Saurabh Ranjan
 * @email: inrsaurabh@gmail.com
 */
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { MyRoutes } from "./routes";
import Header from './components/Header/index';
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <div className="h-24 min-h-full" style={{ minHeight: "36rem" }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            ...MyRoutes
        ]
    }
])
export const App = () => {
    return <RouterProvider router={appRouter} />
}

export default App;