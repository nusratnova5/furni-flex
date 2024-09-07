import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Provide the context to the rest of the app
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load the user from localStorage to maintain session
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Save user to localStorage on login
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // Remove user from localStorage on logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
