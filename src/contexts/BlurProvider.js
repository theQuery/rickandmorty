import { createContext, useContext, useState } from 'react';

const BlurContext = createContext();

export function useBlur() {
    return useContext(BlurContext);
}

function BlurProvider({ children }) {
    const [isBlurred, setIsBlurred] = useState(false);

    return <BlurContext.Provider value={[isBlurred, setIsBlurred]}>
        {children}
    </BlurContext.Provider>
}

export default BlurProvider;