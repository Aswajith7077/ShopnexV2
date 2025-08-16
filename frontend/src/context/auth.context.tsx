import { readCredentials } from "@/hooks/useApiService";
import { createContext, useContext, useEffect, useState } from "react";
import type { LoginResponseType as User } from "@/types/api/auth.type";

const AuthContext = createContext<User | undefined>(undefined);

const useAuthContext = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error(
      "Context Error: Auth context is undefined! Wrap your component with AuthProvider."
    );
  }
  return auth;
};

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // 1️⃣ Initial read
  const [auth, setAuth] = useState<User | null>(() => readCredentials());

  useEffect(() => {
    const handleStorage = () => {
      setAuth(readCredentials());
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  if (!auth) {
    throw new Error("Auth is not being configured");
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, useAuthContext, AuthContextProvider };
