import { createContext, useState, useContext, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import { app } from "../firebase"

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const isAvailableForViewing = router.pathname === "/login" || router.pathname === "/signup";
  const value = { user }

  useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      !user && !isAvailableForViewing && (await router.push("/login"));
    });
    return () => {
      authStateChanged();
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
