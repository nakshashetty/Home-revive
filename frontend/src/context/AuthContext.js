import { createContext,useContext,useState, useEffect, useReducer } from "react";

// const initial_state = {
//     user: localStorage.getItem('user')===undefined ? JSON.parse(localStorage.getItem('user')) : null,
//     loading: false,
//     error: null,
// }

const userFromLocalStorage = localStorage.getItem('user');
const initial_state = {
    user: userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null,
    loading: false,
    error: null,
}

// const initial_state = {
//     user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
//     loading: false,
//     error: null,
// };

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                loading: true,
                error: null, 
            };
            case 'LOGIN_SUCCESS':
                return {
                    user: action.payload,
                    loading: false,
                    error: null
                }
                case 'LOGIN_FAILURE':
                    return {
                        user: null,
                        loading: false,
                        error: action.payload
               }
               case 'REGISTER_SUCCESS':
                    return {
                        user: null,
                        loading: false,
                        error: null
               } 
               case 'LOGOUT':
                    return {
                        user: null,
                        loading: false,
                        error: null
               }
            default :
            return state
    }
};

export const AuthContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(AuthReducer, initial_state)

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
    },[state.user])

    return <AuthContext.Provider value={{
        user:state.user,
        loading: state.loading,
        error:state.error,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>
}



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }