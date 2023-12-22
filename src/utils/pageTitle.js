import { SITE_NAME } from "../constants";


const titleMapping = {
    '/': 'Home Page',
    '/about-us': 'About Us'
};

const getPageTitle = (route) => {

    if (titleMapping[route]) {
        return `${titleMapping[route]} - ${SITE_NAME}`
    }

    return SITE_NAME;
}

export default getPageTitle;