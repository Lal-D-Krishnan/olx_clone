import {createContext,useState} from 'react'

export const FirebaseContext = createContext(null)
// save context to know whether loggedin or not in AuthContext
export const AuthContext = createContext(null);

export default function Context({children}){
    const [user,setUser] = useState(null)

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}