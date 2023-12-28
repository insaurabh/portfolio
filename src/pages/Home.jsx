import Home from "../components/Home";
import Spotlight from "../components/Spotlight";


const HomePage = () => {

    return <>
        <Spotlight
            className="-top-10 left-0 md:left-20 md:-top-1"
            fill="white"
        />
        <Home />
    </>
}

export default HomePage;