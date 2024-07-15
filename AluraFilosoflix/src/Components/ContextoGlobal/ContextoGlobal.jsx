import { createContext, useState } from "react";

export const ContextoGlobal = createContext();

const ContextoGlobalProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    return (
        <ContextoGlobal.Provider value={{videos, setVideos}}>
            {children}
        </ContextoGlobal.Provider>
    );
}
export default ContextoGlobalProvider;