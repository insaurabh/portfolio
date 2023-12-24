import Logo from "./Logo";
import Menu from "./Menu";
import sun from "./../../assets/img/sun.svg";
import moon from "./../../assets/img/moon.svg";
import ThemeContext from "../../utils/ThemeContext";
import { useContext } from "react";

const Header = () => {
    const { darkMode, handleDarkMode } = useContext(ThemeContext);
    return (
        < header className="flex bg-slate-600 sm:fixed top-0 left-0 right-0  place-content-between lg:px-16 sm:px-10 px-4 sm:py-5 py-4 sm:dark:bg-gray-800 sm:shadow-sm sm:bg-zinc-100" >
            <div className="">
                <Menu />
            </div>
            <div>
                <Logo />
            </div>
            <div>
                <img src={darkMode ? sun : moon} data-aria="" alt="light mode" onClick={() => handleDarkMode(!darkMode)} />
            </div>
        </header >
    )
}

export default Header;