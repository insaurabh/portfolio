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
import useDarkMode from "./utils/hooks/useDarkMode";
import ThemeContext from "./utils/ThemeContext";
import { useContext } from "react";
const AppLayout = () => {
    const [darkMode, handleDarkMode] = useDarkMode();
    return (
        <ThemeContext.Provider value={{ darkMode, handleDarkMode }} >
            <div className={`portfolio ${darkMode && 'dark'}`}>
                <Header />
                <div className="min-h-full my-20 flex flex-col" style={{ minHeight: "35rem" }}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ThemeContext.Provider>

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