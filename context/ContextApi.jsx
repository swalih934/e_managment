import React, {  useState } from 'react'
import { createContext } from 'react'

 export const addprojectResponseContext = createContext()

function ContextApi({ children }) {
    const [addResponse, setAddResponse] = useState("")
    return (
        <>
            <addprojectResponseContext.Provider value={{ addResponse, setAddResponse }}>
                {children}
            </addprojectResponseContext.Provider>

        </>
    )
}

export default ContextApi