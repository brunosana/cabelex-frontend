import React, { ReactNode, createContext, useCallback, useState, useContext } from 'react';

import IUser from '../interfaces/User';

interface IAuthContextData {
    user: IUser;
    signIn(cretendials: ICredentials): Promise<void>;
    signOut(): Promise<void>;
    isLogged: boolean;
}

interface ICredentials {
    username: string;
    password: string;
}

const AuthContext = createContext({} as IAuthContextData);

const storageUserName = '@cabelex::user';

const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<IUser>(()=>{
        const storagedUser = localStorage.getItem(storageUserName);
        if(storagedUser)
            return JSON.parse(storagedUser);
        
        return undefined;
    });
    const [isLogged, setIsLogged] = useState(false);

    const signIn = useCallback(async ({ username , password }: ICredentials) => {
        if(username && password){
            if(username === 'admin' && password === 'admin'){
                const loggedUser = {
                    name: username,
                    password
                } as IUser;

                setUser(loggedUser);
                localStorage.setItem(storageUserName, JSON.stringify(loggedUser));
                setIsLogged(true);
            }else{
                throw new Error('Credenciais incorretas');
            }
        }else {
            throw new Error('Faltando usuário ou passowrd');
        }
    }, []);
    const signOut = useCallback(async () => {
        setUser({} as IUser);
        setIsLogged(false);
        localStorage.removeItem(storageUserName);
    }, []);

    return(
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                user,
                isLogged
            }}
        >
            { children }
        </AuthContext.Provider>
    )
};

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}


export { AuthProvider, useAuth };