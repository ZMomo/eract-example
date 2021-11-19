import { createContext, useContext, useEffect, useState } from 'react';

import axios from '../config/axios'

const APIContext = createContext();
const useAPIContext = () => useContext(APIContext);

const APIContextProvider = ({ children }) => {
    const [entries, setEntries] = useState();

    const getEntries = async () => {
        try {
            const data = await axios.get('/entries');
            setEntries(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const maFunction = () => {
        return 0;
    }

    useEffect(() => {
        getEntries();
    }, [])

    const value = { entries, setEntries }

    return <APIContext.Provider value={value}>
        { children }
    </APIContext.Provider>
}

export { APIContextProvider, useAPIContext }