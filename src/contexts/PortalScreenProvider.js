import { createContext, useContext, useState } from 'react';

const PortalScreenContext = createContext();

export function usePortalScreen() {
    return useContext(PortalScreenContext);
}

function PortalScreenProvider({ children }) {
    const [portalScreen, setPortalScreen] = useState(false);
    const value = [portalScreen, setPortalScreen];

    return <PortalScreenContext.Provider value={value}>
        {children}
    </PortalScreenContext.Provider>
}

export default PortalScreenProvider;