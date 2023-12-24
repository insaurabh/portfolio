import { useState } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(true);
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return [darkMode, setDarkMode, handleDarkMode];
}

export default useDarkMode;