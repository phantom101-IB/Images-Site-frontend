import { createContext, useContext, useState } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [check, setCheck] = useState(false)
    return <AppContext.Provider value={{ check, setCheck }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }