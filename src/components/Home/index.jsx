import Spotlight from "../Spotlight";
import { EvervaultCard } from "../evervault-card";
import { GlowingStarsBackgroundCard } from "../glowing-stars";
import BioSection from "./BioSection";

// import { cn } from "@/utils/cn";
// import Spotlight from "../ui/spotlight";

const Home = () => {
    return (
        <div className="">
            {/* <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            /> */}
            {/* <GlowingStarsBackgroundCard> */}
            <BioSection />
            <div className="mt-5">
                <EvervaultCard />
            </div>
            {/* </GlowingStarsBackgroundCard> */}
        </div>
    )
}

export default Home;