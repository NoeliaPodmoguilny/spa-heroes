import { useReducer } from "react"
import { AuthContext, authReducer} from "./"
import { types } from "../types/types"

//es el que utiliza el AuthContext con el obj de que éste sea el componenete que sirve para proveer la info a toda mi app
//es quien expone la información


    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'))

        return{
            logged: !!user,
            user
        }
    }
export const AuthProvider = ({children}) => {
    
    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = '') => {
        const user = {id: 'abc', name}
        const action = {type: types.login, payload: user}

        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user')
        const action = {type: types.logout}

        dispatch(action)
    }

    return(
        <AuthContext.Provider value ={{
                ...authState, 
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    )
}