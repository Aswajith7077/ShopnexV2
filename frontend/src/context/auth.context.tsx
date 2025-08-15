import { readCredentials } from "@/hooks/useApiService";
import { createContext, useContext } from "react";
import type { LoginResponseType as User } from "@/types/api/auth.type"


const AuthContext = createContext<User | undefined>(undefined);

const useAuthContext = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error("Context Error: Auth context is undefined! Wrap your component with AuthProvider.");
    }
    return auth;
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    // Add your auth state management here
    const auth: User | null = readCredentials()

    if (!auth){
        throw new Error("Auth is not being configured")
    }

    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}

export {
    AuthContext,
    useAuthContext,
    AuthContextProvider
}

