import { createContext, useState } from "react";

export const LoginStatusContext = createContext();

export function LoginStatusProvider({ children }) {
  const [loginStatus, setLoginStatus] = useState(null);

  return (
    <LoginStatusContext.Provider value={[loginStatus, setLoginStatus]}>
      {children}
    </LoginStatusContext.Provider>
  );
}
