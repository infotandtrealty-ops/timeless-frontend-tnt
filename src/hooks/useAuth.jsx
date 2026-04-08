import React, { createContext, useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Assuming these types (RootState, AppDispatch) are handled by your Redux setup
// In JSX, we don't import types, but we'll import the store actions.
// We must adjust the path if '@/store' is an alias. Assuming standard structure:
// import type { RootState, AppDispatch } from "@/store"; 

import { loginThunk, logoutThunk, refreshMe, signupThunk } from "../store/slices/authSlice"; // Adjusted path

// Note: Type definitions are removed in JSX
// type User = { id: string; name: string; email: string; role: string } | null;
// type AuthContextType = { ... };

// Define the context object
const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  // We rely on the Redux store configuration to correctly type dispatch
  // Removed explicit type <AppDispatch>
  const dispatch = useDispatch(); 

  // Removed explicit type (s: RootState) and cast (as User)
  const user = useSelector((s) => s.auth.user);
  const loading = useSelector((s) => s.auth.loading);

  const refresh = useCallback(async () => {
    await dispatch(refreshMe());
  }, [dispatch]);

  useEffect(() => {
    // Attempt to refresh user data when the component mounts
    dispatch(refreshMe());
  }, [dispatch]);

  const login = useCallback(async (email, password) => {
    const result = await dispatch(loginThunk({ email, password }));
    
    // Thunk utility check for handling errors in components
    if (loginThunk.rejected.match(result)) {
      // result.payload should contain the error message from the rejected thunk
      throw new Error(result.payload); 
    }
  }, [dispatch]);

  const signup = useCallback(async (name, email, password) => {
    const result = await dispatch(signupThunk({ name, email, password }));
    
    // Thunk utility check for handling errors in components
    if (signupThunk.rejected.match(result)) {
      // result.payload should contain the error message from the rejected thunk
      throw new Error(result.payload); 
    }
  }, [dispatch]);

  const logout = useCallback(async () => {
    await dispatch(logoutThunk());
  }, [dispatch]);

  // The value object is implicitly typed based on its contents
  const contextValue = { user, loading, login, signup, logout, refresh };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}